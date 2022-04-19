interface Props {
  by: string;
  children: React.ReactChild;
}

const Review: React.FC<Props> = ({ by, children }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center px-5 md:px-10 lg:px-20'>
      <div className='text-xl md:text-2xl lg:text-3xl leading-10 lg:leading-[3rem] tracking-tight'>
        &ldquo;{children}&rdquo;
      </div>
      <div className='mt-6'>&mdash; {by}</div>
    </div>
  );
};

export default Review;
