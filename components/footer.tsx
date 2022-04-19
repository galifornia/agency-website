import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className='flex gap-8 items-center justify-center bg-black text-white p-20'>
      <Image src='/assets/logo.svg' width={18} height={18} />
      <Link href='/terms'>Terms</Link>
      <Link href='/privacy'>Privacy</Link>
    </footer>
  );
};

export default Footer;
