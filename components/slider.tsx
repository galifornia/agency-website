import { useContext, useRef } from 'react';
import { SizeContext } from '../utils/size-observer';

interface Props {
  initialOffsetX: number;
  className: string;
  contentWidth: number;
  children: React.ReactNode;
}

const Slider: React.FC<Props> = ({
  children,
  contentWidth,
  className,
  initialOffsetX,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScroll = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className='inline-block'>
        {children}
      </div>
    </div>
  );
};

export default Slider;
