import { atom } from 'recoil';

export const atomUserId = atom({
  key: 'wlive.userId',
  default: '',
});

export const atomContainerKey = atom({
  key: 'wlive.containerKey',
  default: 0,
});

export const atomProductKey = atom({
  key: 'wlive.productKey',
  default: 0,
});

export const atomIsLoading = atom({
  key: 'wlive.isLoading',
  default: false,
});

export const atomChannelList = atom({
  key: 'wlive.channelList',
  default: [],
});
