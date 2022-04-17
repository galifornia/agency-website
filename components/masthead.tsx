import Image from 'next/image';
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from '../utils/scroll-observer';

type Props = {};

const MastHead: React.FC = ({}: Props) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    console.log({ scrollY });
  }, [scrollY]);

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
      className='min-h-screen flex flex-col items-center justify-center text-white sticky top-0 -z-10'
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className='absolute w-full h-full object-cover'
      >
        <source src='/assets/masthead-bg.mp4' type='video/mp4' />
        {/* <source src='/assets/masthead_bg.webm' type='video/webm; codecs=vp9' /> */}
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image
          src='/assets/logo.svg'
          width={128 / 1.5}
          height={114 / 1.5}
          alt='agency logo'
        />
      </div>
      <div className='p12 font-bold text-white z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center'>
        <h1 className='mb-6 text-4xl xl:text-5xl'>Beatitudo</h1>
        <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
          <span>App Development,</span> <span>done right.</span>
        </h2>
      </div>

      <div className='flex flex-grow-0 pb-20 md:pd-10 transition-all duration-1000 '>
        <Image
          src='/assets/arrow-down.svg'
          width={188 / 4}
          height={105 / 4}
          alt='Scroll down arrow'
        ></Image>
      </div>
    </div>
  );
};

export default MastHead;
