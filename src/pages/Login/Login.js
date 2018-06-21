import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './login.css';
import logo from '../../logo.svg';
import {postAUTH} from '../../redux/actions/auth';

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    this
      .props
      .postAUTH(data);
  }

  render() {
    const {token, isLoading, errorMsg} = this.props.auth;
    if (token) {
      return (<Redirect
        to={{
        pathname: "/",
        state: {
          from: this.props.location
        }
      }}/>);
    }

    return (
      <div className="login">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <img
            className="mb-4"
            src={logo}
            alt=""
            width="72"
            height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">测试工具Web</h1>

          <label htmlFor="inputEmail" className="sr-only">邮箱地址</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="请输入邮箱地址"
            required
            autoFocus/>
          <label htmlFor="inputPassword" className="sr-only">密码</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="请输入登录密码"
            required/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/>
              记住密码
            </label>
          </div>
          {isLoading
            ? '请求中...'
            : (
              <button className="btn btn-lg btn-primary btn-block" type="submit">登 陆</button>
            )}
          <p className="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {postAUTH})(Login);