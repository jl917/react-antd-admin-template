import React from 'react';
import { Button, List, Typography } from 'antd';
import postQuery from '@/common/query/postQueryRecoil';

const PageQuery = () => {

  const { get, posts, add } = postQuery();

  console.log(posts)


  const addPost = () => {
    add({
      body: "101 contents",
      id: 101,
      title: "new title",
      userId: 1,
    })
  };

  return (
    <div style={{ textAlign: 'left', background: '#fff' }}>
      <h1>posts</h1>
      <Button onClick={get}>
        getposts
      </Button>
      <Button onClick={addPost}>
        add
      </Button>
      <List
        bordered
        dataSource={posts || []}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text>{item.id}</Typography.Text> {item.title}
            <Button size="small" onClick={addPost}>
              추가
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageQuery;
