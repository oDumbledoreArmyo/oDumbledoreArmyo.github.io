import React from 'react';
import{Card} from 'antd';
import {Router,Route,Link}from 'react-router-dom';

export default class PCNewsBlock extends React.Component{

constructor(){
  super();
  this.state = {
    news: ''
  };
}

componentWillMount(){
  var myFetchOptions = {
    method:'GET'
  };
  fetch("https://api.xinwen.cn/news/all" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  	};

  render(){

const {news} = this.state;
const newsList = news.length
?
news.map((newsItem,index)=>(
  <li key={index}>
    <Link to={'details/${newsItem.uniquekey}'} target="_blank">
      {newsItem.title}
    </Link>
  </li>
))
:
'教程里的API好像没法用，暂时也没找到免费的API'
    return(
      <div class="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  };
}
