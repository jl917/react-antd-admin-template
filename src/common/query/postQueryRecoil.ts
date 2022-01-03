import { getPosts, addPost } from '@/common/apis/posts';
import { atom, useRecoilState } from 'recoil';

const postAtom = atom({
  key: 'posts',
  default: [],
})

const postQueryRecoil = () => {
  const [posts, setPosts] = useRecoilState<any>(postAtom);

  const get = async () => {
    const res = await getPosts();
    setPosts(res.data);
  }

  const add = async (data: any) => {
    const res = await addPost(data);
    setPosts([...posts, res.data]);
  }

  return { posts, get, add }
}

export default postQueryRecoil;