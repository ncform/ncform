import assert from 'assert';
import nock from 'nock';
import Ajax from '../../src/rules/ajax';

describe('/src/rules/ajax.js', () => {
  beforeEach(() => {
    nock('http://mock')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(new RegExp('/check/true'))
      .reply(200, function(uri) {
        console.log(uri);
        return true;
      });

    nock('http://mock')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(new RegExp('/check/object'))
      .reply(200, function(uri) {
        console.log(uri);
        return {
          result: true
        };
      });
  });

  it('接口返回 true', async () => {
    const validation = await new Ajax().validateLogic('daniel', {
      remoteUrl: 'http://mock/check/true',
      method: 'get',
      paramName: 'name',
      otherParams: {
        status: 'ok'
      }
    });

    assert(validation === true);
  });

  it('接口返回 object', async () => {
    const validation = await new Ajax().validateLogic('daniel', {
      remoteUrl: 'http://mock/check/object',
      method: 'get',
      paramName: 'name',
      otherParams: {
        status: 'ok'
      },
      resField: 'result'
    });

    assert(validation === true);
  });
});
