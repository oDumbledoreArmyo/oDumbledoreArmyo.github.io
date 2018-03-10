import React, { Component } from 'react';
import {Row, Col} from 'antd';
import footer from '../../css/pc.css';

export default class PCFooter extends React.Component {
  constructor(){
    super();
    this.state={
      current:'top'
    };
  }

  render(){
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} >
            <p class="footer">&copy;&nbsp;2018 ReactNews. All Rights Reserved.</p>
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>

    );
  };
}
