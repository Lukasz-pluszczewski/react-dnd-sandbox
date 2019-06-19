import React, { useEffect, useState } from 'react';

const urls = {
  posts: 'https://my-json-server.typicode.com/typicode/demo/posts',
  comments: 'https://my-json-server.typicode.com/typicode/demo/comments',
};

const fetchResource = url => fetch(url)
  .then(response => response.json());

const useApiResource = (resourceName) => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!fetching && !data) {
      setFetching(true);
      fetchResource(urls[resourceName])
        .then(resourceData => {
          setData(resourceData);
          setFetching(false);
        });
    }
  });

  return [data, fetching];
};

export default useApiResource;
