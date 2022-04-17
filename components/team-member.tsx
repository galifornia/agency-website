import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  socialId: string;
  link: string;
};

const TeamMember: React.FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assets/team/margelo_faces_${id}.svg`}
        alt={name}
        width={1366}
        height={1555}
      />
      <div className='text-2xl lg:text-3xl'>{name}</div>
      <div className='text-xl lg:text-2xl'>
        <Link href={link}>
          <a target='_blank'>{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
