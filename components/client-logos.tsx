import Image from 'next/image';
import Slider, { SliderItem } from './slider';

interface Props {}

const ClientLogos: React.FC<Props> = ({}) => {
  return (
    <>
      <Slider className='' contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/audubon.png'
            width={150}
            height={50}
            alt='Audubon'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/audubon.png'
            width={150}
            height={50}
            alt='Audubon'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/audubon.png'
            width={150}
            height={50}
            alt='Audubon'
            objectFit='contain'
          />
        </SliderItem>
      </Slider>
    </>
  );
};

export default ClientLogos;
