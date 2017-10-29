import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('switches page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  var buttons = document.getElementsByClassName('pageButton');
  buttons[3].click();
  expect(document.getElementsByClassName('Object-row')[0].innerText).stringContaining('Rock Island'); 
  buttons[1].click();
  expect(document.getElementsByClassName('Object-row')[0].innerText).stringContaining('Warren');
});

