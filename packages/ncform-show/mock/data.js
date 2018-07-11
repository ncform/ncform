
module.exports = {
  // route: data | get data function
  '/api/test/getName': (params) => {
    return {
      name: 'Daniel',
      params: params
    };
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
  }
};
