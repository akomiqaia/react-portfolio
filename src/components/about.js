import React, { Component } from 'react';
import { Typography, Divider } from 'antd'


const { Title, Paragraph, Text } = Typography


const titleStyle = {
  padding: 30, 
  textAlign: "center"
}

class About extends Component {
  render() {
    return (
      <div style={{ padding: 50 }}>        
        <Typography>
          <Title style={{ padding: 20 }}>ABOUT ME</Title>
          <Divider />
          <Title level={3} style={titleStyle}>EDUCATION</Title>
        <Paragraph>
          <Text strong>
            React Developer nanodegree<br/>
            <a href="https://www.udacity.com/course/react-nanodegree--nd019">Udacity</a>, London 2019
          </Text>
        </Paragraph>

        <Paragraph>
          <Text strong>
            B.A Arts and Science<br />
            <a href="https://www.rug.nl/?lang=en">University of Groningen</a>, Netherlands 2015
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>
          B.A Literature Studies<br />
            <a href="https://iliauni.edu.ge/en/">Ilia State University</a>, Georgia 2013
          </Text>
        </Paragraph>

            <Title level={3} style={titleStyle}>ONLINE COURSES</Title>
            <Paragraph style={{letterSpacing: '0.05em', fontSize: 16}}>
                <a href="https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x">
                  CS50 Computer Science</a>
                <span>&#183;</span> 
                <a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript">
                Web Programming with JavaScript and Python</a>
                <span>&#183;</span>
                <a href="https://www.freecodecamp.org/learn">
                Responsive Web Design Certification</a>
                <span>&#183;</span>
                <a href="https://www.freecodecamp.org/learn">
                JavaScript Algorithms and Data Structures Certification</a>
                <span>&#183;</span>
                <a href="https://www.freecodecamp.org/learn">
                Front End Libraries Certification</a>
                <span>&#183;</span>
                <a href="https://www.freecodecamp.org/learn">
                APIs and Microservices Certification</a>
                <span>&#183;</span>
                <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X">
                Working with Data and APIs in JavaScript</a>
                <span>&#183;</span>
                <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA">
                Code! Programming with p5.js</a>
                <span>&#183;</span> 
            </Paragraph>
        </Typography>

      </div>
    );
  }
}

export default About;