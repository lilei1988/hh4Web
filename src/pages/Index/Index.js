import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "./index.css";
import {logout} from '../../redux/actions/auth';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
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
      <div>
        <Navbar className="navbar navbar-dark zbg-dark" expand="md">
          <NavbarBrand href="javascrip::void();" onClick={this.props.logout}>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 bg-light sidebar">
              <div className="sidebar-header">
                <h5>header</h5>
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false">Pages</a>
                  <ul className="nav flex-column collapse" id="homeSubmenu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Page</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>

            </div>
            <div id="content" className="col-sm-10 ml-sm-auto"></div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {logout})(Index);