import Promise from 'bluebird';
import superagent from 'superagent';

const BASE_URL = 'http://localhost:3000/';

export function requestGet(url) {
  return new Promise((resolve, reject) => {
    superagent
      .get(BASE_URL + url)
      .type('json')
      .accept('json')
      .end((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
  });
}

export function requestPost(url, params) {
  return new Promise((resolve, reject) => {
    superagent
      .post(BASE_URL + url)
      .type('json')
      .accept('json')
      .send(params)
      .end((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
  });
}

export function requestPatch(url, params) {
  return new Promise((resolve, reject) => {
    superagent
      .patch(BASE_URL + url)
      .accept('json')
      .send(params)
      .end((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
  });
}
