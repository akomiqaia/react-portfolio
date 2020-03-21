import React, { Component } from 'react';
import { Typography, Divider, Card, Icon, List } from 'antd'


import bookLogo from "../pics/book.png"
import tricount from "../pics/tricount.png"
import voting from "../pics/voting.png"

const { Title, Text } = Typography;

// action buttens under every project
const actions = [
  <Icon type="github" key="setting" />,
  <Icon type="edit" key="edit" />,
  <Icon type="ellipsis" key="ellipsis" />,
]
const data = [
  {
    title: 'Book Review Webpage',
    alt: "screeenshot of a bookreview page",
    src: bookLogo
  },
  {
    title: 'Tricount Clone',
    src: tricount,
  },
  {
    title: 'Votting App',
    src: voting,
  }
];

class Projects extends Component {
  render() {
    return (
      <div style={{ padding: 50 }}>

        <Typography style={{ padding: 20}}>
          <Title>PROJECTS</Title>
          <Text>The projects I am proud of</Text>
        </Typography>
        <Divider />
        <List
          grid={{gutter: 10, column: 3}}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card 
                cover={
                  <img
                    alt={item.alt}
                    src={item.src}
                  />
                }
                actions={actions} 
                title={item.title}>card content</Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Projects;