import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

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
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Pink Panda&apos;s app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div>AGAIN</div>
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
                <div>We craft</div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div>AGAIN</div>
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
                <div>We do</div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div>AGAIN</div>
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
