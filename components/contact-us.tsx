import Image from 'next/image';

interface Props {}

const ContactUs: React.FC<Props> = ({}) => {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen'>
      <div className='pb-10 '>
        <Image
          src='/assets/logo.svg'
          width={30}
          height={30}
          alt='agency logo'
        />
      </div>
      <h2 className='text-4xl font-bold'>Contact us</h2>
      <form className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 w-full max-w-[500px] lg:min-w-[500px]'>
        <input
          id='companyName'
          name='companyName'
          className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          required
          maxLength={128}
          type='text'
          placeholder='Company name'
        />
        <input
          id='email'
          name='email'
          className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          required
          maxLength={128}
          type='email'
          placeholder='Your E-mail'
        />
        <textarea
          id='message'
          name='message'
          className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]'
          placeholder='Additional information'
          required
          maxLength={1280}
        ></textarea>
        <div className='text-center mt-10'>
          <button
            type='submit'
            className='bg-white text-black rounded-3xl px-8 py-2'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
