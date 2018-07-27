import React, { Component } from 'react';
import faker from 'faker'

class Scattered extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

  componentDidMount () {
    // For now, create some fake data upon mounting;
    // Need Company name, date accepted, accepted status, salary offered
    let randomNumb;

    let numbApplied = 20 + Math.ceil(300 * Math.random());
    let data = []
    for (var i = 0; i < numbApplied; i++) {
      randomNumb =  Math.random();
      data[i] = {};
      data[i].dateApp = faker.date.between('2018-09-01', '2019-01-14');
      data[i].company = faker.company.companyName();
      if (randomNumb > 0.95) {
        data[i].status = 'accepted';
      } else {
        data[i].status = 'rejected';
      }
    }
    console.log(data[0].dateApp);

    data[0].dateAccepted = faker.date.future(0.1, data[0].dateApp);
    console.log(data[0].dateAccepted);
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div>
      Scattered
      </div>
    ) 
  }
}

export default Scattered;