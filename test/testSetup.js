import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

chai.use(chaiAsPromised);
chai.use(dirtyChai);
chai.use(sinonChai);

global.expect = chai.expect;
global.chai = chai;
global.sinon = sinon;
global.should = chai.should();

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true
});
const { window } = jsdom;

global.window = window;
global.document = window.document;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
