import Image from 'next/image';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile';
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from './work';

type Props = {};

const Works: React.FC<Props> = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We built</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                  <WorkLink href='https://pinkpanda.io/'>Pink Panda</WorkLink>
                  &apos;s app.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src='/assets/works/pinkpanda.webp'
                  layout='responsive'
                  width={840}
                  height={1620}
                  alt='Pink Panda app in mobile'
                />
              </WorkRight>
            </WorkContainer>
          )}
          page={0}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We made</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                  <WorkLink href='https://steakwallet.fi/'>
                    Steakwallet
                  </WorkLink>
                  &nbsp;faster.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src='/assets/works/steakwallet.webp'
                  layout='responsive'
                  width={840}
                  height={1620}
                  alt='Steakwallet demo in mobile'
                />
              </WorkRight>
            </WorkContainer>
          )}
          page={1}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                  <WorkLink href='https://showtime.io/'>Showtime</WorkLink> ship
                  faster.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src='/assets/works/showtime.webp'
                  layout='responsive'
                  width={840}
                  height={1620}
                  alt='Showtime demo in mobile'
                />
              </WorkRight>
            </WorkContainer>
          )}
          page={2}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
