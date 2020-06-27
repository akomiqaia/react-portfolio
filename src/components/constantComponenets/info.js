import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Pic from '../../pics/cat-on-the-shoulder.jpg'
import { Typography , Card, Divider, Button, BackTop} from 'antd'

import Icons from '../icons'

const { Text, Paragraph } = Typography
const { Meta } = Card
const picStyle = {
  width:  '15em',
  borderRadius: '50%',
}

const textStyle = {
  fontSize: 24,
  letterSpacing: '0.2em',
}

const emailAddress = <a href="mailto: akaki.mikaia.1@iliauni.edu.ge">akaki.mikaia.1@iliauni.edu.ge</a>

class Info extends Component {
  render() {
    return (
      <div>
        <BackTop />
        <Card
          style={{border: 'none'}}
          cover={<img src={Pic} alt='profile' style={picStyle} /> }
        >
          <Meta 
            title={<Text strong style={textStyle}>AKAKI MIKAIA</Text>} 
            description= { emailAddress }  
          />
        </Card>
        <Divider />
        <Paragraph>
          Hi I am Akaki Mikaia and i enjoye wokring on interesting projects. I am Founders and Coders graduate developer and currently I am working for a charity in Irland.Enthusiast of technologies that brings social impacts.
        </Paragraph>
        <Link to="/about">
          <Button size={'large'}>About Me</Button>
        </Link>
        <Divider />
        <Icons />
        
      </div>

    );
  }
}

export default Info;