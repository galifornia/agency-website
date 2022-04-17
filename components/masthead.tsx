import Image from 'next/image';

type Props = {};

const MastHead: React.FC = ({}: Props) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-white'>
      <video
        autoPlay
        muted
        playsInline
        loop
        className='absolute w-full h-full object-cover'
      >
        <source src='/assets/masthead_bg.mp4' type='video/mp4' />
        <source src='/assets/masthead_bg.webm' type='video/webm; codecs=vp9' />
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
