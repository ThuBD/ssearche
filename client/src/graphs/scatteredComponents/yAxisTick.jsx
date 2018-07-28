import React, { Component } from 'react';

class YAxisTick extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <span className={"y-" + this.props.ind}>
        <div className={"y" + this.props.ind}>{this.props.yValue}</div>
      </span>
    );
  }
}

export default YAxisTick;