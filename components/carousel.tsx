import emblaCarouselAutoplay from 'embla-carousel-autoplay';
import emblaCarouselClassNames from 'embla-carousel-class-names';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

import styles from '../styles/carousel.module.css';

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [emblaCarouselClassNames(), emblaCarouselAutoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
