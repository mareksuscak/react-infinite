/* eslint-env jest */

jest.dontMock('../src/utils/getTopOffset.js');
jest.dontMock('react-dom');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var getTopOffset = require('../src/utils/getTopOffset.js');

describe('getTopOffset', () => {
  it('throws when undefined was passed as a param', () => {
    expect(() => getTopOffset()).toThrow();
  });

  it('returns correct element offset relative to its positioned parents', () => {
    window.pageYOffset = 200;

    var rootNode = TestUtils.renderIntoDocument(
      <div className="container">
        <div className="element">Child</div>
      </div>
    );

    expect(getTopOffset(ReactDOM.findDOMNode(rootNode).children[0])).toBe(200);
  });
});
