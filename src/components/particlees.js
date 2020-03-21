import React, { Component } from 'react'
import Particles from 'react-particles-js'

let partParams = {
	"fps_limit": 28,
	"particles": {
			"number": {
					"value": 400,
					"density": {
							"enable": false
					}
			},
			"color": {
				"value": "#8b6825"
			},
			"line_linked": {
					"enable": true,
					"distance": 30,
					"opacity": 0.4,
					"color": "#8b6825"
			},
			"move": {
					"speed": 1
			},
			"opacity": {
					"anim": {
							"enable": true,
							"opacity_min": 0.05,
							"speed": 2,
							"sync": false
					},
					"value": 0.4
			}
	},
	"polygon": {
			"enable": true,
			"scale": 0.5,
			"type": "inline",
			"move": {
					"radius": 5
			},
			"url": "src/components/deer.svg",
			"inline": {
					"arrangement": "equidistant"
			},
			"draw": {
					"enable": true,
					"stroke": {
							"color": "#8b6825"
					}
			}
	},
	"retina_detect": false,
	"interactivity": {
			"events": {
					"onhover": {
							"enable": true,
							"mode": "bubble"
					}
			},
			"modes": {
					"bubble": {
							"size": 6,
							"distance": 40
					}
			}
	}
}

class Particle extends Component {
	
  render() {
    return (
			<div>
			{/* <img src='src/components/MC2.svg' /> */}
      <Particles params = {partParams} />
			</div>
    )
  }
}

export default Particle