import Axios from 'axios';

export const getBroadcastChannel = () =>
  Axios({
    url: '/api-deal/broadcast/wlive/getBroadcastChannel',
    method: 'GET',
  });

export const setBroadcast = (data: any) =>
  Axios({
    url: '/api-deal/broadcast/wlive/setBroadcast',
    method: 'POST',
    data,
  });
