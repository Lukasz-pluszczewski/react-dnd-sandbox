import React, { useState } from 'react';

import { Icon } from 'antd';

const fetchPosts = () => fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(response => response.json());

const Hooks3 = () => {
  const [posts, setPosts] = useState(null);

  if (!posts) {
    fetchPosts()
      .then(setPosts);
  }

  return (
    <div>
      {posts ? (<pre>{JSON.stringify(posts, null, 2)}</pre>) : (<Icon type="loading" />)}
    </div>
  );
};

export default Hooks3;
