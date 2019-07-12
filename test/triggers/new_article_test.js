const plg = require('pluga-plg');
const { expect } = require('chai');

const trigger = require('../../lib/triggers/new_article');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
};

describe('Trigger: New article', function () {
  it('test trigger handle', function (done) {
    trigger.handle(plg, event).then((articles) => {
     expect(articles).to.be.an('array');
     done();
    }).catch(done);
  });
});
