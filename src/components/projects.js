import React, { Component } from 'react';
import { Typography, Divider, Icon, List, Space } from 'antd'

import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import bb from "../pics/bb.png"
import pm from "../pics/pm.png"

const { Title, Text } = Typography;

// action buttens under every project


const actions = [

 <Icon type="github" key="setting" />,
  <Icon type="edit" key="edit" />,
  <Icon type="ellipsis" key="ellipsis" />,
]

const data = [
  {
    title: "Prepare Me",
    alt: "prepare me visual picture",
    content: "Prepare Me is a platform created for parents with kids with autism. On the platform parents are able to create printable books from templates to tell the social stories to their kids. Prepare me is a part of Tech for Better program at FAC where I took a role of SCRUM Master",
    src: pm,
  },
  {
    title: 'Bechdel and Beyond',
    alt: "prepare me visual picture",
    content: "Bechdel and Beyond is a platform that enables users to search for films and check if the movies pass the Bechdel test and alongside display gender parity for the crew and cast. Users are also able to submit their reviews and vote for the films.",
    src: bb
  },
];

class Projects extends Component {
  render() {
    return (
      <div style={{ padding: 50}}>

        <Typography style={{ padding: 20}}>
          <Title>PROJECTS</Title>
          <Text>The projects I am proud of</Text>
        </Typography>
        <Divider />
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item
            style={{maxWidth: "70%", marginLeft: "15%"}}
            key={item.title}
              // actions={actions} 
              extra={
                <img
                  width={300}
                  alt={item.alt}
                  src={item.src}
                />}
            >
              <List.Item.Meta
                title={item.title}
                description={item.content}
              />
            </List.Item>
          )}
        ></List>
          <Divider  />
      </div>
    );
  }
}

export default Projects;