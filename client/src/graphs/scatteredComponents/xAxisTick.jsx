import React, { Component } from 'react';

class XAxisTick extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <span className={"x-" + this.props.ind}>
        <div className={"x" + this.props.ind}>
          {this.props.xValue}
        </div>
      </span>
    );
  }
}

export default XAxisTick;