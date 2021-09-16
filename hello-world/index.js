import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container() {
  return /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('p', null, '버튼을 클릭해 주세요.'), /*#__PURE__*/React.createElement(Button, {
    label: '좋아요'
  }), /*#__PURE__*/React.createElement(Button, {
    label: '싫어요'
  }));
}

const domContainer = document.getElementById('root');
ReactDOM.render( /*#__PURE__*/React.createElement(Container), domContainer);