import React, { Component } from 'react';
import Icons from './icons'
import { Typography, Divider } from 'antd'

const { Title, Paragraph } = Typography


class Contact extends Component {
  render() {
    return (
      <div style={{ padding: 50}}>
        <Typography style={{ padding: 20 }}>
          <Title>CONTACT</Title>
          <Divider />
          <Paragraph>
            Feel free to Contact me at <a href="mailto: akaki.mikaia.1@iliauni.edu.ge">akaki.mikaia.1@iliauni.edu.ge</a>
          </Paragraph>
        <Icons />
        </Typography>

        
      </div>
    );
  }
}

export default Contact;