import React, { useState, useEffect } from 'react';

import { Icon } from 'antd';

const fetchPosts = () => fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(response => response.json());

const Hooks4 = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetchPosts()
      .then(setPosts);
  }, [posts]);

  return (
    <div>
      {posts ? (<pre>{JSON.stringify(posts, null, 2)}</pre>) : (<Icon type="loading" />)}
    </div>
  );
};

export default Hooks4;
