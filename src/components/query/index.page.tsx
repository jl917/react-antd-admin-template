import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, addPost } from '@/common/apis';

const PageQuery = () => {
  const queryClient = useQueryClient();

  const postMutation: any = useMutation(addPost, {
    onSuccess: () => {
      console.log(queryClient);
      console.log('success');
      queryClient.setQueryData('posts', 'daolang');
      console.log(a);
    },
  });

  const postQuery = useQuery('posts', getPosts, {
    keepPreviousData: true,
    enabled: false,
  });

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
      {console.log(postQuery.data?.data)}
      <ul>
        {(postQuery.data?.data || []).map(({ id, title }: any) => (
          <li>
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
