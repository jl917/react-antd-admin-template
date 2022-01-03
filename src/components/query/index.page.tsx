import React from 'react';
import { Button, List, Typography } from 'antd';
import postQuery from '@/common/query/postQuery';

const PageQuery = () => {

  const { add, query } = postQuery();

  const addPost = () => {
    add.mutate({
      body: "101 contents",
      id: 101,
      title: "new title",
      userId: 1,
    });
  };

  return (
    <div style={{ textAlign: 'left', background: '#fff' }}>
      <h1>posts</h1>
      <Button onClick={() => query.refetch()} loading={query.isFetching}>
        getposts
      </Button>
      <Button onClick={addPost} loading={query.isFetching}>
        add
      </Button>
      {console.log(postQuery)}
      <List
        bordered
        dataSource={query.data?.data || []}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.id}</Typography.Text> {item.title}
            <Button size="small" onClick={addPost} loading={query.isFetching}>
              추가
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageQuery;
