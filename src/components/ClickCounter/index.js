// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">
          The Button has been clicked
          <span className="span-element">{count}</span> times.
        </h1>
        <p className="main-passage">Click the button to increase the count!</p>
        <button type="button" className="btn" onClick={this.onIncrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
