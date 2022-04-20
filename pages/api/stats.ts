import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  downloads: number;
  commits: number;
};

const packages = [
  'react-native-mmkv',
  'react-native-vision-camera',
  'react-native-blurhash',
];

// scoped packages are not supported in bulk lookups
const scopedPackages = [
  '@gorhom/bottom-sheet',
  '@gorhom/animated-tabbar',
  '@gorhom/portal',
];

const ghAccounts: { readonly [username: string]: number } = {
  javache: 1,
};

const ghAuthUsername = process.env['GITHUB_USERNAME'] || '';
const ghAuthToken = process.env['GITHUB_PERSONAL_ACCESS_TOKEN'] || '';

async function getNumOfDownloads() {
  try {
    const since = new Date(+new Date() - 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    const now = new Date().toISOString().split('T')[0];
    const baseUrl = `https://api.npmjs.org/downloads/point/${since}:${now}`;
    const url = `${baseUrl}/${packages.join(',')}`;
    const { data: stats } = await axios.get(url);
    for (let scopedPackage of scopedPackages) {
      const { data } = await axios.get(`${baseUrl}/${scopedPackage}`);
      stats[scopedPackage] = data;
    }
    const downloads = Object.keys(stats).reduce(
      (num, key) => num + stats[key].downloads,
      0
    );
    return downloads;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

async function getNumOfCommits() {
  try {
    const baseUrl = `https://api.github.com/repos/facebook/react-native/commits`;
    let num = 0;

    await Promise.all(
      Object.keys(ghAccounts).map(async (username) => {
        const perPage = 30;
        const startPage = ghAccounts[username];

        for (let page = startPage; page < 100; ++page) {
          const { data: commits } = await axios.get(baseUrl, {
            params: {
              author: username,
              since: '2000-01-01',
              perPage,
              page,
            },
            auth: {
              username: ghAuthUsername,
              password: ghAuthToken,
            },
          });
          num += commits.length;
          if (commits.length < perPage) break;
        }
      })
    );
    return num;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const [downloads, commits] = await Promise.all([
    getNumOfDownloads(),
    getNumOfCommits(),
  ]);
  // cache result for 1 day
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json({
    commits,
    downloads,
  });
}
