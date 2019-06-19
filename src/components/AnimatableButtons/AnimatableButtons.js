import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const AnimatableButtons = ({ onTheRight, animate, handleClickOne, handleClickTwo }) => {
  return (
    <div style={{ marginLeft: onTheRight ? 'calc(100% - 117px)' : '0', transition: animate ? 'all 0.5s' : 'none' }}>
      <Button onClick={handleClickOne}>One</Button>
      <Button onClick={handleClickTwo}>Two</Button>
    </div>
  );
};

AnimatableButtons.propTypes = {
  onTheRight: PropTypes.bool,
  animate: PropTypes.bool,
  handleClickOne: PropTypes.func,
  handleClickTwo: PropTypes.func,
};

export default memo(AnimatableButtons);
