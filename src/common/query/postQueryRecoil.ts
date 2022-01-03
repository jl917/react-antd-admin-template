import { getPosts, addPost } from '@/common/apis/posts';
import { atom, useRecoilState } from 'recoil';

const postAtom = atom({
  key: 'posts',
  default: [],
})

const postQueryRecoil = () => {
  const [posts, setPosts] = useRecoilState<any>(postAtom);

  const get = () => {
    getPosts().then((res) => {
      setPosts(res.data);
    })
  }

  const add = (data: any) => {
    addPost(data).then((res: any) => {
      setPosts([...posts, res.data]);
    })
  }

  return { posts, get, add }
}

export default postQueryRecoil;