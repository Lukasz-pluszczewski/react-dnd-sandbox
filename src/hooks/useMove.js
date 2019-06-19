import React, { useState } from 'react';

const useMove = (initialPosition = false) => {
  const [onTheRight, setSide] = useState(initialPosition);
  const [animate, setAnimate] = useState(false);

  return [onTheRight, animate, (withAnimation) => {
    setAnimate(withAnimation);
    setSide(!onTheRight);
  }];
};

export default useMove;
