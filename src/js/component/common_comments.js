
import React, { Component } from 'react';
import {Row, Col} from 'antd';
import {logo,register} from '../../css/pc.css';
import {Router,Route,Link}from 'react-router-dom';
import {Menu,
        Icon,
        Tabs,
        message,
        Form,
        Input,
        Button,
        CheckBox,
        Modal,
        Card,
        notification

      } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component{
  constructor(){
    super();
    this.state = {
      comments: ''
    };
  };
    componentDidMount(){
      var myFetchOptions ={
        method: 'GET'
      };
      fetch("https://api.xinwen.cn/news/all"+this.props.uniquekey,
    myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
        this.setState({newsItem:json})

    });
  };


    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions ={
          method: 'GET'
        };
        var formdata=this.props.form.getFieldValue();
        fetch("https://api.xinwen.cn/news/all"+localStorage.userid+"& uniquekey=" + this.props.uniquekey+"& comment="+ formdata.remark,
        myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
          this.componentDidMount();
      })
    };
    addUserCollection(){
      var myFetchOptions={
        method:'GET'
      };
      fetch("https://api.xinwen.cn/news/all",myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
        //收藏成功以后进行全局提醒
        notification['success']({message:'ReactNews提醒',description:'收藏此文章成功'});
      });
    };

    render(){
      let {getFieldDecorator} = this.props.form;
      const {comments} = this.state;
      const commentList = comments.length ?
      comments.map((comment,index)=>(
          <Card key={index} title={comment.UserName} extra={<a href="a">发布于{comment.datetimen}</a>}>
            <p>{comment.Comments}</p>
          </Card>

      ))
      :
      '还没有用户评论';
      return(
        <div class="comment">
          <Col span={24}>
          {commentList}
            <Form onSubmit ={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="随便写~"{...getFieldDecorator('remark',{initialValue:''})}/>
              </FormItem>
              <Button type="primary" htmlType="submit" >提交评论</Button>
              &nbsp;&nbsp;
              <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
            </Form>
          </Col>
        </div>
      );
    };
  };


export default CommonComments = Form.create({})(CommonComments);
