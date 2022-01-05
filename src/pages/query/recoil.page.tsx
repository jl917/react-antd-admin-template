import React from 'react';
import postQuery from '@/common/query/postQueryRecoil';

const PageQuery = () => {
  const { get, posts, add } = postQuery();

  const addPost = () => {
    add({
      body: '101 contents',
      id: 101,
      title: 'new title',
      userId: 1,
    });
  };

  return (
    <div style={{ textAlign: 'left', background: '#fff' }}>
      <h1>posts</h1>
      <button onClick={get}>getposts</button>
      <button onClick={addPost}>add</button>
      {
        (posts || []).map((item: any) => (
          <li>
            <h5>{item.id}</h5> {item.title}
            <button onClick={addPost}>
              추가
            </button>
          </li>
        ))
      }
    </div>
  );
};

export default PageQuery;