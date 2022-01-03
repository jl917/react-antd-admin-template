import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, addPost } from '@/common/apis/posts';

const postQuery = () => {
  const queryClient = useQueryClient();

  const query = useQuery('posts', getPosts, {
    keepPreviousData: true,
    enabled: false,
  });

  const add: any = useMutation(addPost, {
    onSuccess: (response: any) => {
      queryClient.setQueryData('posts', (oldData: any) => {
        return { ...oldData, data: [...(oldData?.data || []), response.data] };
      });
    },
  });

  return { add, query };
};

export default postQuery;
