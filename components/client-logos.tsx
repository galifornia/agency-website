import Image from 'next/image';
import Slider, { SliderItem } from './slider';

interface Props {}

const ClientLogos: React.FC<Props> = ({}) => {
  return (
    <>
      <Slider className='' contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={100}>
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
            src='/assets/trustedby/coinbase.png'
            width={150}
            height={50}
            alt='Coinbase'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/exodus.png'
            width={150}
            height={50}
            alt='Exodus'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/expensify.png'
            width={150}
            height={50}
            alt='expensify'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/extra.png'
            width={150}
            height={50}
            alt='extra'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/image.png'
            width={150}
            height={50}
            alt='image'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/litentry.png'
            width={150}
            height={50}
            alt='litentry'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/panda.png'
            width={150}
            height={50}
            alt='panda'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/picnic.png'
            width={150}
            height={50}
            alt='picnic'
            objectFit='contain'
          />
        </SliderItem>
      </Slider>
      <Slider className='mt-8' contentWidth={1290} initialOffsetX={150}>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/rainbow.png'
            width={150}
            height={50}
            alt='rainbow'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/scribeware.png'
            width={150}
            height={50}
            alt='scribeware'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/shopify.png'
            width={150}
            height={50}
            alt='shopify'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/showtime.png'
            width={150}
            height={50}
            alt='showtime'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/slingshot.png'
            width={150}
            height={50}
            alt='slingshot'
            objectFit='contain'
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src='/assets/trustedby/snap-calorie.png'
            width={150}
            height={50}
            alt='snap-calorie'
            objectFit='contain'
          />
        </SliderItem>
      </Slider>
    </>
  );
};

export default ClientLogos;
