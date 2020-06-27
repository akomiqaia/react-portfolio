
import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import Contact from "./contact"; 
import Projects from "./projects"
import About from "./about";
import Particle  from "./particlees";
import { Badge } from 'antd';
import getRandomTerminalName from '../utils/random-name'

class Cont extends Component {
  showMsg = () => 'Hello World'
 
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
		  height: "100vh",
        }}
      >
        <Terminal
		  color='#8b6825'
		  prompt="#8b6825"
		  backgroundColor='none'
		  promptSymbol={getRandomTerminalName()}
		  barColor='none'
		  hideTopBar={true}
			startState="maximised"
		  allowTabs={false}
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          commands={{
			'projects': () => <Projects />,
			'about': () => <About />,
			'contact': () => <Contact />,
			'get-me-deer': () => <Particle />,
            showmsg: this.showMsg,
          }}
          descriptions={{
            'projects': 'returns projects I have worked on',
            "about": 'gets you to know me better',
			"contact": 'returns not so secret portal gates to establish a connection with me',
			"get-me-deer": "just as name suggests, get you a deer"
			
          }}
          msg='Welcome to anouther CLI, Type help for possible commands'
        />
      </div>
    );
  }
}


export default Cont;