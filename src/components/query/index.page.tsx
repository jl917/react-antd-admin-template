import React from 'react';
import postQuery from '@/common/query/postQuery';

const PageQuery = () => {
  const { add, query } = postQuery();

  const addPost = () => {
    add.mutate({
      body: '101 contents',
      id: 101,
      title: 'new title',
      userId: 1,
    });
  };

  return (
    <div style={{ textAlign: 'left', background: '#fff' }}>
      <h1>posts</h1>
      <button onClick={() => query.refetch()}>
        getposts
      </button>
      <button onClick={addPost}>
        add
      </button>
      {console.log(postQuery)}
      <ul>
        {
          (query.data?.data || []).map((item: any) => (
            <li>
              <h5>{item.id}</h5> {item.title}
              <button onClick={addPost}>
                추가
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default PageQuery;