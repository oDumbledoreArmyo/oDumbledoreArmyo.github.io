import React from 'react'
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
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
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="头条" key="1">
          <div class="carousel">
            <Carousel {...settings}>
              <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
              <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
              <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
              <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
            </Carousel>
          </div>
            <MobileList  count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
          <div class="carousel">
            <Carousel {...settings}>
              <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
              <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
              <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
              <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
            </Carousel>
          </div>
            <MobileList  count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
          <div class="carousel">
            <Carousel {...settings}>
              <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
              <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
              <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
              <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
            </Carousel>
          </div>
            <MobileList  count={20} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
          <div class="carousel">
            <Carousel {...settings}>
              <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
              <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
              <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
              <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
            </Carousel>
          </div>
            <MobileList  count={20} type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
          <div class="carousel">
            <Carousel {...settings}>
              <div><img src="http://img.hkwb.net/att/site2/20131104/56984923bf754db8f759869398648a40.jpg"/></div>
              <div><img src="http://www.sinaimg.cn/ty/zl/football/blog/2014-12-04/1059/1739392044/U5295P6T1233D2205F36786DT20141204112013.jpg"/></div>
              <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167820096,2073772705&fm=27&gp=0.jpg"/></div>
              <div><img src="http://www.xjhc.gov.cn/newpaper/UploadFiles/image/201108/201108061151268803.jpg"/></div>
            </Carousel>
          </div>
            <MobileList  count={20} type="yule" />
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
