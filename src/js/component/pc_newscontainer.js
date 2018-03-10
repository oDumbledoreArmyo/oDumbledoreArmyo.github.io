import React, { Component } from 'react';
import {Row, Col} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;


export default class PCNewsContainer extends React.Component{
  render(){
    const settings ={
      dots:true,
      infinite:true,
      speed: 500,
      slidesToShow:1,
      autoplay:true
    };

    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
                  <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
                  <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
                  <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px"/>
              <PCNewsImageBlock count={6} type="yule" width="400px" cardTitle="娱乐头条" imageWidth="112px"/>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="头条新闻" key ='1'>
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际新闻" key ='2'>
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
              </TabPane>
            </Tabs> 
            <div>
            <PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="132px"/>
            <PCNewsImageBlock count={8} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="132px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
