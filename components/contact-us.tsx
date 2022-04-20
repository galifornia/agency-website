import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {}

const ContactUs: React.FC<Props> = ({}) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleServerResponse = useCallback((ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({ companyName: '', email: '', message: '' });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      })
        .then((_response) => {
          handleServerResponse(
            true,
            'Thank you! Your message has been submitted.'
          );
        })
        .catch((e) =>
          handleServerResponse(
            false,
            "Something went wrong and your message wasn't sent. " + e
          )
        );
    },
    [inputs, handleServerResponse]
  );

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
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 w-full max-w-[500px] lg:min-w-[500px]'
      >
        {status.info.error && (
          <div
            className='bg-red-100 border border-red-400 text-red-700px-4 py-3 rounded relative'
            role='alert'
          >
            <strong className='font-bold'>Error</strong>{' '}
            <span className='block sm:inline'>{status.info.msg}</span>
          </div>
        )}
        {status.submitted ? (
          <div
            className='text-white text-xl font-bold px-4 py-3 rounded relative'
            role='alert'
          >
            Your message has been succesfully sent. We will come back to you
            very soon!
          </div>
        ) : (
          <>
            <input
              id='companyName'
              name='companyName'
              onChange={handleChange}
              value={inputs.companyName}
              className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
              required
              maxLength={128}
              type='text'
              placeholder='Company name'
            />
            <input
              id='email'
              name='email'
              onChange={handleChange}
              value={inputs.email}
              className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
              required
              maxLength={128}
              type='email'
              placeholder='Your E-mail'
            />
            <textarea
              id='message'
              name='message'
              onChange={handleChange}
              value={inputs.message}
              className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]'
              placeholder='Additional information'
              required
              maxLength={1280}
            ></textarea>
            <div className='text-center mt-10'>
              <button
                disabled={status.submitting}
                type='submit'
                className='bg-white text-black rounded-3xl px-8 py-2'
              >
                {!status.submitting ? 'Submit' : 'Submitting...'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
