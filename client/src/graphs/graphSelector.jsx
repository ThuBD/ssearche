import React, { Component } from 'react';
import GraphOptions from './graphOptions.jsx';
import ReactDOM from 'react-dom';
import Line from './Line.jsx';
import Scattered from './Scattered.jsx';
import Pie from './Pie.jsx';
import Rate from './Rate.jsx';

class GraphSelector extends Component {
  constructor(props) {
    super(props);
    this.optionsHandler = this.optionsClick.bind(this);
    this.state = {
      graphs : ['Line','Scattered','Rate','Pie'],
      selectedGraph : Line,
      components : {
        Line : <Line />,
        Scattered : <Scattered />, 
        Rate : <Rate />, 
        Pie : <Pie />
      },
      componentDisplay : <Line />
    }
  }

  componentDidUpdate () {
    // can set state of graphs list based on status of user's membership
    // should run this once user logs in / changes selected graph
    ReactDOM.render(this.state.componentDisplay, document.getElementById('graphDisplay'))
  }

  optionsClick (e) {
    this.setState({ selectedGraph : e.target.value, componentDisplay : this.state.components[e.target.value] })
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <section id="graphSelector">
        <select onChange={this.optionsHandler}>
        {this.state.graphs.map((graph) => {
          return (
            <GraphOptions 
              selected={graph}
            />
          );
        })}
        </select>
        <div id="graphDisplay">
        </div>
      </section>
    ) 
  }
}

export default GraphSelector;