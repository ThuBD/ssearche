import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
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
      xAxisValues : [],
      trigger : false
    }
  }

  produceYAxisArray () {
    let valuesInNumb = this.state.salaries.map((element) => {
      return Number(element.substring(1));
    });
    let minY = Math.min(...valuesInNumb);
    let maxY = Math.max(...valuesInNumb);
    let padding = (maxY - minY) * 0.2;
    minY = Math.round((minY - padding)/10000) * 10000;
    maxY = Math.round((maxY + padding)/10000) * 10000;
    let interval = (maxY - minY) / 5;

    return (['$' + String(maxY), '$' + String(minY + 4 * interval), '$' + String(minY + 3 * interval), '$' + String(minY + 2 * interval), '$' + String(minY + 1 * interval), '$' + String(minY)]);
  }

  produceXAxisArray () {
    let minX = this.state.datesHeard.reduce((accum, element) => {
      if (element.getTime() < accum.getTime()) {
        return element;
      }
      return accum;
    });
    
    let maxX = this.state.datesHeard.reduce((accum, element) => {
      if (element.getTime() > accum.getTime()) {
        return element;
      }
      return accum;
    });

    let minMoment = moment([minX.getFullYear(), minX.getMonth(), minX.getDate()]);
    let maxMoment = moment([maxX.getFullYear(), maxX.getMonth(), maxX.getDate()]);
    let dayRange = maxMoment.diff(minMoment, 'days');

    // make sure data are more than a day apart
    if (dayRange > 1) {
      this.renderComponentsIfMetCondition();
    }

    let numberOfTicks = this.decideSizeOfAxis(dayRange);

    return [];
  }

  decideSizeOfXAxis (dayRange) {
    if (dayRange === 1) {
      return 2
    }
    if (dayRange === 2) {
      return 3
    }
    if (dayRange === 3) {
      return 4
    }
    if (dayRange === 4) {
      return 5
    }
    if (dayRange === 5) {
      return 6
    }
    return 7
  }

  renderComponentsIfMetCondition () {
    ReactDOM.render(
        <YAxis
          values={this.state.yAxisValues}
        />
      , document.getElementById('attachYAxis'));

      ReactDOM.render(
        <DataPoints 
          x={this.state.datesHeard}
          y={this.state.salaries}
          name={this.state.companies}
        />
      , document.getElementById('attachDataPoints'));

      ReactDOM.render(
        <XAxis
          values={this.state.datesHeard}
        />
      , document.getElementById('attachXAxis'));
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
    let yAxisValues = this.produceYAxisArray();

    // also create values for xAxis based on range of dates
    // edge cases, multiple in only one day
    let xAxisValues = this.produceXAxisArray();

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
                <div id="attachYAxis">Required to get offers on two separate days!</div>
                <div id="attachDataPoints"></div>
                <div id="attachXAxis"></div>    
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