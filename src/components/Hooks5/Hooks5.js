import React from 'react';

import { Icon } from 'antd';

import useApiResource from '../../hooks/useApiResource';

const Hooks5 = () => {
  const [ posts, fetching ] = useApiResource('posts');

  return (
    <div>
      {fetching ? (<Icon type="loading" />) : null}
      {posts ? (<pre>{JSON.stringify(posts, null, 2)}</pre>) : null}
    </div>
  );
};

export default Hooks5;
