import React, { Component } from 'react';
import YAxis from './yAxis.jsx';
import XAxis from './xAxis.jsx';
import DataPoints from './dataPoints.jsx';
import Description from './description.jsx';

class HasOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies : [],
      datesApplied : [],
      datesHeard : [],
      salaries : [],
      yAxisValues : [],
      trigger : false
    }
  }

  componentDidMount () {
    let companies = [];
    let datesApplied = [];
    let datesHeard = [];
    let salaries = [];
    this.props.data.forEach((element) => {
      if (element.status === 'accepted') {
        companies.push(element.company);
        datesApplied.push(element.dateApp);
        datesHeard.push(element.dateHeard);
        salaries.push(element.salary);
      };
    });
    this.setState({
      companies : companies,
      datesApplied : datesApplied,
      datesHeard : datesHeard,
      salaries : salaries
    });
  }

  componentDidUpdate () {
    // create values for yAxis based on range of salaries

    let yAxisValues = [];
    let valuesInNumb = this.state.salaries.map((element) => {
      return Number(element.substring(1));
    });
    console.log(valuesInNumb)
    let min = Math.min(...valuesInNumb);
    let max = Math.max(...valuesInNumb);
    let padding = (max - min) * 0.2;
    min = Math.round((min - padding)/10000) * 10000;
    max = Math.round((max + padding)/10000) * 10000;
    let interval = (max - min) / 5;
    yAxisValues = ['$' + String(max), '$' + String(min + 4 * interval), '$' + String(min + 3 * interval), '$' + String(min + 3 * interval), '$' + String(min + 3 * interval), '$' + String(min)];
    if (!this.state.trigger) {
      this.setState({ yAxisValues : yAxisValues, trigger : true });
    }
  }
  
  // renders entire section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <section id="scatteredComponent">
        <header className="scatteredHead">
        Salary Offers
        </header>
        <div className="chartDiv">
          <div className="chartContainer">
            <div className="innerChartContainer">
              <div className="axes">
                <YAxis
                  values={this.state.yAxisValues}
                />
                <DataPoints 
                  x={this.state.datesHeard}
                  y={this.state.salaries}
                  name={this.state.companies}
                />
                <XAxis
                  values={this.state.datesHeard}
                />
              </div>
            </div>
          </div>
        </div>
        <Description
        /> 
      </section>
    ) 
  }
}

export default HasOffers;