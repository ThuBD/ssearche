import React, { Component } from 'react';
import DataPoint from './dataPoint.jsx'

class DataPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger : false
    }
  }

  render () {
    return (
      <div></div>
    )
  }

  // componentDidUpdate () {
  //   if (this.state.trigger === false) {
  //     this.setState({
        
  //       trigger : true
  //     });
  //   }
  // }

  // render () {
  //   return (
  //     <svg className="xs" width="560" height="120">
  //       {this.props.estimate.map((data, index) => {
  //         return (
  //           <DataPoint
  //             estimatePoint={Number(data.substring(1))}
  //             actualPoint={Number(this.state.actual[index].substring(1))}
  //             yRange={this.props.yRange}
  //             ind={index + 1}
  //           />
  //         );
  //       })}
  //     </svg>
  //   );
  // }
}

export default DataPoints;