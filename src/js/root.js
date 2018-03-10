import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCNewsDetails from './component/pc_details';
import MobileNewsDetails from './component/mobile_details';
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';

export default class Root extends React.Component {
  render() {
    return (
      <div>
      <MediaQuery query='(min-device-width: 1224px)'>
          <Router>
            <div>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            </div>
          </Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
          <Router>
            <div>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            </div>
          </Router>

				</MediaQuery>
      </div>
    );
  };
}
