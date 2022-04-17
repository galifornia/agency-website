import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
  numOfPages: number;
  children?: React.ReactNode;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const { current: elContainer } = refContainer;
  let currentPage = 0;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }
  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div ref={refContainer} className="relative  text-white">
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC = () => (
  <div className="absolute h-full w-full"></div>
);

export const TileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="sticky top-0 h-screen bg-black overflow-hidden">
    {children}
  </div>
);
