import React, { useRef } from "react";


const useScroll = () => {
  const scroll = useRef();

  const scrollTo = (y) => {
    scroll.scrollTo(y);
  }

  const scrollTop = () => {
    scroll.current.scrollTo({x: 0, y: 0, animated: true});
  }
  
  return {
    scrollTo,
    scrollTop,
    scroll
  }
}

export default useScroll;