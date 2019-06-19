import React  from 'react';
import useMove from '../../hooks/useMove';

import AnimatableButtons from '../AnimatableButtons/AnimatableButtons';

const Hooks2 = () => {
  const [onTheRight, animate, move] = useMove();

  return (
    <div>
      <AnimatableButtons
        animate={animate}
        onTheRight={onTheRight}
        handleClickOne={() => move(false)}
        handleClickTwo={() => move(true)}
      />
    </div>
  );
};

Hooks2.propTypes = {};

export default Hooks2;
