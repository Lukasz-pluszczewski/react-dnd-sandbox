import React, { useState } from 'react';

import AnimatableButtons from '../AnimatableButtons/AnimatableButtons';

const Hooks = () => {
  const [onTheRight, setSide] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <div>
      <AnimatableButtons
        animate={animate}
        onTheRight={onTheRight}
        handleClickOne={() => {
          setAnimate(false);
          setSide(!onTheRight);
        }}
        handleClickTwo={() => {
          setAnimate(true);
          setSide(!onTheRight);
        }}
      />
    </div>
  );
};

export default Hooks;
