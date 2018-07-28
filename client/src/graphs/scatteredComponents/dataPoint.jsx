import React, { Component } from 'react';

class DataPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <g transform={"translate(" + (560 * Math.random()) + ", " + (500 * Math.random()) + ")"}>
        <circle r="7" fill="#116A4C" className={"dataPoint" + this.props.ind + ', estCircle'} />
      </g>
    )
  }
}

export default DataPoint;