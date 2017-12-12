import React, { Component } from 'react'
import { render } from 'react-dom'

class DivSize extends Component {

  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }

  componentDidMount() {

    this.setState({ height: this.divElement.clientHeight });
  }

  render() {

    return (
      <div
        className="test" style={{ height: 200 }}
        ref={(divElement) => this.divElement = divElement}
      >
        Size: <b>{this.state.height}px</b> but it should be 18px after the render
      </div>
    )
  }
}

export default DivSize