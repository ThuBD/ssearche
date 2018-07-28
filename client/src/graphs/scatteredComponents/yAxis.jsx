import React, { Component } from 'react';
import YAxisTick from './yAxisTick.jsx';

class YAxis extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="ylabel">
        {this.props.values.map((yTick, index)=>{
          return (
            <YAxisTick 
              yValue={yTick}
              ind={index + 1}
            />
          );
        })}
      </div>
    );
  }
}

export default YAxis;