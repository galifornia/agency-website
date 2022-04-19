import Carousel from './carousel';
import CarouselItem from './carousel-item';

type Props = {};

const Testimonials: React.FC<Props> = () => {
  return (
    <Carousel className='bg-black text-white py-10 lg:py-20'>
      <CarouselItem index={0}>First</CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
