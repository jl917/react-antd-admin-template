import { atom, selector } from 'recoil';

export const atomShowNav = atom({
  key: 'atomShowNav',
  default: true,
});

export const selectorShowNav = selector({
  key: 'selectorShowNav',
  get: ({ get }) => (get(atomShowNav) ? '열림' : '닫힘'),
});
