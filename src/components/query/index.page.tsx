import React from 'react';
import { Button, List, Typography } from 'antd';
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
      <Button onClick={() => postQuery.refetch()} loading={postQuery.isFetching}>
        getposts
      </Button>
      <Button onClick={changePost} loading={postQuery.isFetching}>
        getposts
      </Button>
      {console.log(postQuery.data?.data)}
      <List
        bordered
        dataSource={postQuery.data?.data || []}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.id}</Typography.Text> {item.title}
            <Button size="small" onClick={changePost} loading={postQuery.isFetching}>
              수정
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageQuery;
