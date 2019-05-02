var supertest = require('supertest');
var app = require('../index.js');

const r = supertest(app);

describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
    r.get('/').expect('hello world').end(done);
 });
});

