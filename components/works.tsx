import { TileBackground, TileContent, TileWrapper } from "./tile";

type Props = {};

const Works: React.FC<Props> = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>Foo</TileContent>
      <TileContent>Caroteno</TileContent>
      <TileContent>Tupe</TileContent>
    </TileWrapper>
  );
};

export default Works;
