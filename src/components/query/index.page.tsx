import React from 'react';
import sampleQuery from './query';

const PageQuery = () => {
const { postQuery, postMutation} = sampleQuery();

  const changePost = () => {
    postMutation.mutate({ id: 3 });
  };

  return (
    <div style={{ textAlign: 'left', background: '#fff' }}>
      <h1>posts</h1>
      <button onClick={() => postQuery.refetch()} type="button">
        getposts
      </button>
      <button onClick={changePost} type="button">
        getposts
      </button>
      <ul>
        {(postQuery.data?.data || []).map(({ id, title }: any) => (
          <li key={id}>
            {id} - {title}
            <button onClick={changePost} type="button">
              수정
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageQuery;
