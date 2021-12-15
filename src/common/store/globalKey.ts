import { atom, useRecoilState } from 'recoil';

const atomGlobalKey = atom({
  key: 'atomGlobalKey',
  default: 0,
});

export const globalKeyState = () => {
  const [value, setValue] = useRecoilState(atomGlobalKey);
  const forceUpdate = () => setValue(value + 1);

  return { value, forceUpdate };
};
