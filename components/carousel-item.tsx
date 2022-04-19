import { useCallback, useContext } from 'react';
import { CarouselContext } from './carousel';
import styles from '../styles/carousel.module.css';

interface Props {
  index: number;
  children: JSX.Element;
}

const CarouselItem: React.FC<Props> = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = index === selectedIndex;

  const handleClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, selectedIndex]);
  return (
    <div
      className={`${styles.slide} relative  ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
