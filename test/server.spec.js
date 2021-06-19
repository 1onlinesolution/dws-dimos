const supertest = require('supertest');
const assert = require('assert');
const { HttpStatus } = require('@1onlinesolution/dws-http');
const app = require('../server');

describe('GET /', function () {
  let request;
  beforeEach(function () {
    request = supertest(app);
  });

  it('responds with json', function (done) {
    request.get('/').set('Accept', 'application/json').expect('Content-Type', /json/).expect(HttpStatus.statusOk, done);
  });

  it('responds with message', function (done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        assert(res.body.status === HttpStatus.statusOk);
        assert(res.body.success);
        assert(res.body.value.message.includes('Dimos Service'));
      })
      .end(done);
  });
});

describe('GET /wrong-route', function () {
  let request;
  beforeEach(function () {
    request = supertest(app);
  });

  it('responds with not found', function (done) {
    request
      .get('/wrong-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        assert(res.body.status === HttpStatus.statusNotFound);
        assert(res.body.success === false);
        assert(res.body.value.message.includes('not found'));
      })
      .end(done);
  });
});


describe('GET /api/mail', function () {
  let request;
  beforeEach(function () {
    request = supertest(app);
  });

  it('responds with not found', function (done) {
    request
      .get('/api/mail')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        assert(res.body.status === HttpStatus.statusNotFound);
        assert(res.body.success === false);
        assert(res.body.value.message.includes('not found'));
      })
      .end(done);
  });
});
