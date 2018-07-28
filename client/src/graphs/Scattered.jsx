import React, { Component } from 'react';
import faker from 'faker';
import moment from 'moment';

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
      data[i].dateHeard = faker.date.future(0.1, data[i].dateApp);
      // Get date difference to give weight to higher chance of higher salary over time
      let a = moment([2018, 8, 1]);
      let b = moment([data[i].dateHeard.getFullYear(), data[i].dateHeard.getMonth(), data[i].dateHeard.getDate()])
      // let b = moment([]);
      let daysSinceFirstApp = b.diff(a, 'days');
      data[i].company = faker.company.companyName();
      if (randomNumb > 0.95) {
        data[i].status = 'accepted';
        let lowerLimit = 55000 + daysSinceFirstApp * 10000 / (daysSinceFirstApp + 50);
        let upperLimit = 105000 + daysSinceFirstApp * 40000 / (daysSinceFirstApp + 50);
        data[i].salary = faker.commerce.price(lowerLimit, upperLimit, 2, "$");
      } else {
        data[i].status = 'rejected';
        data[i].salary = null;
      }
    }
    console.log(data);
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