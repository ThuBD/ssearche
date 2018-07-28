import React, { Component } from 'react';
import DataPoint from './dataPoint.jsx'

class DataPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger : false
    }
  }

  componentDidUpdate () {
    if (this.state.trigger === false) {
      this.setState({
        trigger : true
      });
    }
  }

  render () {
    return (
      <svg className="xs" width="700" height="300">
        {this.props.y.map((yVal, index) => {
          return (
            <DataPoint
              salary={Number(yVal.substring(1))}
              date={Number(this.props.x[index])}
              company={this.props.company}
              ind={index + 1}
            />
          );
        })}
      </svg>
    );
  }
}

export default DataPoints;