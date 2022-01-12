import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, addPost } from '@/common/apis/posts';

const sampleQuery = () => {
  const queryClient = useQueryClient();

  const postMutation: any = useMutation(addPost, {
    onSuccess: (data) => {
      queryClient.setQueryData('posts', data);
    },
  });

  const postQuery = useQuery('posts', getPosts, {
    keepPreviousData: true,
    enabled: false,
  });

  return { postQuery, postMutation }
}

export default sampleQuery;
