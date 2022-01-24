import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
// import Mocha from 'mocha';
// import Sinon from 'sinon';

import server from '../server/server';

chai.use(chaiHttp);

describe('testing server connection', () => {
  it('has pong message', async () => {
    const { body: { message } } = await chai.request(server).get('/ping');
    
    expect(message).to.be.equals('pong');
  });
})

