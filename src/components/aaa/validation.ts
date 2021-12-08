export const rule = {
  programNm: [{ required: true, message: '프로그램명을 입력해주세요.' }],
  dispDt: [{ required: true, message: '방송시간을 입력해주세요.' }],
  url: [{ type: 'url', message: 'https://를 포함하여 URL을 입력해 주세요' }],
  link0: [{ required: true, message: '방송중 URL을 입력해주세요.' }],
  link1: [{ required: true, message: '방송외 연결 URL 을 입력해주세요.' }],
  products: [{ required: true, message: '최소한 1개 이상의 상품을 등록해주세요' }],
};

export const rule2 = {};
