// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state

    if (speed < 200){
      this.setState(previousState => ({speed : previousState.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state

    if (speed > 0){
      this.setState(previousState => ({speed : previousState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="speed-display">Speed is {speed}mph</h1>
        <p className="limits">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-button"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button className="brake-button" type="button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
