import React from 'react';
import ReactDom from 'react-dom';

import GiphExpertApp from './components/GiphExpertApp/GiphExpertApp';

import './index.css';

ReactDom.render(
  <GiphExpertApp />,
  document.querySelector("#root")
);