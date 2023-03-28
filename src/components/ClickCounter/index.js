// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state: {count: 0}
  increaseCount = () => {
    this.setState(prevState => {
      prevState.count + 1
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">
          The Button has been clicked
          <span className="span-element">{count}</span>times
        </h1>
        <p className="main-passage">Click the button to increase the count!</p>
        <button className="btn-dimentions" onClick={this.increaseCount}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
