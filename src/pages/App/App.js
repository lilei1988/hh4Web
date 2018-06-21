import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this
      .toggle
      .bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.

          <Button color="danger" onClick={this.toggle}>Model</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

        </p>
      </div>
    );
  }
}

export default App;
