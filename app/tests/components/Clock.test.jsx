import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toBeTruthy();
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock />);

      expect(clock.formatSeconds(615)).toEqual('10:15')
      expect(clock.formatSeconds(61)).toEqual('01:01')
    })
  })

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      console.log("AAAA")
      console.log($el)
      var text = $el.find('.clock-text').text();

      expect(text).toBe('01:02')
    })
  })
});
