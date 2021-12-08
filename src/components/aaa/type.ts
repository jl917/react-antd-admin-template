export interface IProduct {
  prodNm: string;
  prodNo: string;
  mainProdYn?: string;
  priority?: number;
}

export interface ILinkResult {
  dispPeriod: string;
  promotionNm: string;
  promotionNo: string;
}

export interface IChannel {
  broadcastChannel: string;
  broadcastChannelNm: string;
}
