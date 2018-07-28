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
      salaries : []
    }
  }

  componentDidMount () {
    console.log(this.state)
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
    console.log(this.state)
  }
  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
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
                />
                <DataPoints 
                />
                <XAxis 
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