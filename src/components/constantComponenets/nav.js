import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Typography } from 'antd';
import { Z_FIXED } from 'zlib';

const {Text} = Typography

const navStyle = {
  paddingLeft: 20
}

class Nav extends Component {
  

  render() {
    return (
      <Menu mode="horizontal"  style={navStyle}  >
        <Menu.Item key="name" >
            <Link to='/'>
              <Text strong style={{letterSpacing: '0.3em'}}>
                  AKAKI MIKAIA
              </Text>
            </Link>
          
        </Menu.Item>

        <Menu.Item key="about"  style={{marginLeft: '3em'}} >
          <Link to='/about'>
            ABOUT
          </Link>
        </Menu.Item>

        <Menu.Item key="projects">
          <Link to='/projects'>
            PROJECTS
          </Link>
        </Menu.Item>

        
        <Menu.Item key="resume">
            <a href='https://drive.google.com/file/d/1Lk-fmQNRaJslp0nxzx_qVIpNHK3pXTZq/view?usp=sharing' target='_blank'>
              RESUME
            </a>
        </Menu.Item>

        <Menu.Item key="contact">
          <Link to='/contact'>
            CONTACT
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav