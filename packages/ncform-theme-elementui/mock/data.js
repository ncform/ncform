
module.exports = {
  // route: data | get data function
  '/api/test/getName': (params) => {
    return {
      name: 'Daniel',
      params: params
    };
  },
  '/api/input/getKeywords': (params) => {
    let result = [
      { value: 'oppo' },
      { value: 'xiaomi' },
      { value: 'iphone' },
      { value: 'iphone x' },
      { value: 'iphone 6s' },
    ];
    return { data: result.filter(item => item.value.indexOf(params.keyword) >= 0) };
  },
  '/api/input/getDomains': [{ id: 1, label: '.cn' }, { id: 2, label: '.com' }, { id: 3, label: '.net' }],
  '/api/radio/getItems': { result: [{ id: 1, label: 'iphone' }, { id: 2, label: 'xiaomi' }, { id: 3, label: 'oppo' }] },
  '/api/checkbox/getItems': { result: [{ id: 1, label: 'iphone' }, { id: 2, label: 'xiaomi' }, { id: 3, label: 'oppo' }] },
  '/api/upload/getFileInfo': (params) => {
    return { data: { name: 'shoe.jpg', url: '//a.vpimg2.com/upload/upimg2/ued/cxy/xinke/02-sport.jpg' } };
  },
  '/api/test/getMsg': { msg: 'Hello' },
  '/api/test/getProvinces': (params) => {
    return [{ id: 1, name: '广东' }, { id: 2, name: '北京' }].filter(item => !params.keyword || item.name.indexOf(params.keyword) >= 0);
  },
  '/api/test/getCities': (params) => {
    let result = {
      1: [{ id: 10, name: '广州' }, { id: 20, name: '汕头' }],
      2: [{ id: 30, name: '北京' }]
    }
    let res = result[params.provinceId] || [];
    return res.filter(item => !params.keyword || item.name.indexOf(params.keyword) >= 0);
  },
  '/api/test/getMoney': (params) => {
    return [{ id: 1, name: '1元' }, { id: 2, name: '2元' }].filter(item => !params.keyword || item.name.indexOf(params.keyword) >= 0);
  },
};
