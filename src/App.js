import React, { Component } from 'react';

import { 
  BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';

import Nav from './components/constantComponenets/nav'
import Cont from './components/content'
import Info from './components/constantComponenets/info'
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{padding: 10}}>
        
            <Nav />
            
            <Row style={{paddingTop: '6em'}} >
              <Col span={6} offset={2} >
                <Info />
              </Col>
              <Col span={14}>
                  <Switch>
                    <Route exact path="/" component={Cont} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
              </Col>
            </Row>
            
          
          </div>
        </Router>
    );
  }
}

export default App;

