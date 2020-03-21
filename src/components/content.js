import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particle from './particlees'
import { Typography, Divider } from 'antd'
const { Title, Paragraph } = Typography


class Cont extends Component {

  render() {
    return (
				<div style={{ padding: 50 }}>
					<Typography>
						<Title style={{ padding: 20}}>
							ABOUT THIS SITE
						</Title>
						<Divider />

						<Paragraph style={{ padding: 20}}>
							This is personal responsive react app about myself. The Web page is going to help to discover more <Link to="/about">about me</Link>,
							or get visual setifaction from my <Link to="/projects">projects</Link> or have quick look on the <Link to="/resume">Resume</Link>.
							In case of falling in love or just saying hi <Link to="/contact">contact me </Link> for sure.
						</Paragraph>
						
						<Particle />
					</Typography>
				</div>
    );
  }
}

export default Cont;