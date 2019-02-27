import "@babel/polyfill";

import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';

import data from './data.json';

const title = 'OpenLibrary API'
const headings = ['When', 'Who', 'Description'];

render(<App data={data} title={title} headings={headings} />, document.getElementById('app'));