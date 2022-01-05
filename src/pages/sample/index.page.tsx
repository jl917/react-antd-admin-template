import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getUser, getUser404 } from '@/common/apis/user';
import { getTodo } from '@/common/apis/todo';
import { globalKeyState } from '@/common/store/globalKey';

const PageSample = () => {
  const { value, forceUpdate } = globalKeyState();
  const [id, setId] = useState(1);
  const userQuery = useQuery('user', getUser, {
    enabled: false,
  });
  const user404Query = useQuery('user404', getUser404, {
    enabled: false,
  });
  const todoQuery = useQuery(['todo', id], getTodo, {
    // enabled: false,
    keepPreviousData: true,
    // initialData: {data: {data: {userId: 1, id: 1, title: 'sadfasd', completed: false}}}
  });
  console.log(todoQuery);
  return (
    <>
      <h1>User</h1>
      {userQuery.data?.data.results[0].email}
      <div>
        <button onClick={() => userQuery.refetch()} type="button">
          getUser
        </button>
        <button onClick={() => user404Query.refetch()} type="button">
          getUser4043
        </button>
      </div>
      <h1>Todo</h1>
      <button onClick={() => setId(id + 1)} type="button">
        +
      </button>
      <button onClick={() => setId(id - 1)} type="button">
        -
      </button>
      <button onClick={() => todoQuery.refetch()} type="button">
        getTodo
      </button>
      {console.log(todoQuery.data)}
      <h2>{todoQuery.data?.data.title}</h2>

      <button onClick={forceUpdate} type="button">
        {value}
      </button>
    </>
  );
};

export default PageSample;
