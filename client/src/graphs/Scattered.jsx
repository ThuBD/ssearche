import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import moment from 'moment';
import HasOffers from './scatteredComponents/hasOffers.jsx';

class Scattered extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    // For now, create some fake data upon mounting;
    // Need Company name, date accepted, accepted status, salary offered
    // This section will be removed promptly after database is fully established
    // any computation will in the future be handled in the server

    let randomNumb;

    let offerCount = 0;
    let numbApplied = 30 + Math.ceil(300 * Math.random());
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
      if (randomNumb > 0.97) {
        data[i].status = 'accepted';
        let lowerLimit = 55000 + daysSinceFirstApp * 20000 / (daysSinceFirstApp + 50);
        let upperLimit = 105000 + daysSinceFirstApp * 40000 / (daysSinceFirstApp + 50);
        data[i].salary = faker.commerce.price(lowerLimit, upperLimit, 2, "$");
        offerCount++;
      } else {
        data[i].status = 'rejected';
        data[i].salary = null;
      }
    }
    if (offerCount > 1) {
      ReactDOM.render(<HasOffers data={data}/>, document.getElementById('hasOffers'));
    }
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div id='hasOffers'>
      You Don't Have More Than Two or More Offers Yet!
      </div>
    ) 
  }
}

export default Scattered;