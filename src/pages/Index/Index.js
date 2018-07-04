import React, {Component} from 'react';
import {Redirect, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';
import "./index.css";
import {logout} from '../../redux/actions/auth';

import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import {router} from 'sw-toolbox';
const {Header, Content, Footer, Sider} = Layout;

const Loading = function () {
  return <div>Loading...</div>
};

const TaskList = Loadable({
  loader: () => import ('../Task/TaskList'),
  loading: Loading
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    setTimeout(function () {
      // $('.btn:nth-of-type(1)').button('toggle');
      // $('.btn:nth-of-type(1)').trigger('click');
    }, 1000)
  }

  render() {
    if (!this.props.auth.token) {
      return (<Redirect
        to={{
        pathname: "/login",
        state: {
          from: this.props.location
        }
      }}/>);
    }

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" onClick={this.props.logout}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span><Link to="/tasklist">nav 1</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
            background: '#fff',
            padding: 0
          }}>
            <Icon
              className="trigger"
              type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'}
              onClick={this.toggle}/>
          </Header>
          {/* <Breadcrumb style={{
            margin: '8px 16px 0'
          }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 680
          }}>
            <Route path="/tasklist" component={TaskList}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {logout})(Index);