import React, { Component } from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';

class SideMenu extends Component{
    render(){
        return (
            <Menu theme="dark" mode="inline"  style={{marginTop:'60px'}} >
        <Menu.Item key="1">
        <Link to='/'>
          <Icon type="user" />
          <span className="nav-text">User</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to='/repo'>
        <Icon type="book" theme="outlined" />
          <span className="nav-text">Repository</span>
          </Link>
        </Menu.Item>
        
      </Menu>
        )
    }
}
export default SideMenu;