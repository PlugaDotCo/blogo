const plg = require('pluga-plg');
const { expect } = require('chai');

const action = require('../../lib/actions/create_article');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {
    title: 'Example',
  },
};

describe('Action: Create article', function () {
  it('test action handle', function (done) {
    action.handle(plg, event).then((article) => {
     expect(article).to.not.be.null;
     done();
    }).catch(done);
  });
});
