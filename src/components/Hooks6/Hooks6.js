import React from 'react';

import { Icon } from 'antd';

import useApiResource from '../../hooks/useApiResource';

const Hooks6 = () => {
  const [comments, fetching, update, remove] = useApiResource('comments');

  return (
    <div>
      {fetching ? (<Icon type="loading" />) : null}
      {comments ? (<pre>{JSON.stringify(comments, null, 2)}</pre>) : null}
    </div>
  );
};

export default Hooks6;
