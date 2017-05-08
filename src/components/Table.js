import React, { Component } from 'react'
import sample from '../apis/sample'

export default class Table extends Component {
  constructor(props){
    super(props);
  }

  calculateTotal(obj) {
    let total = 0;
    
    for ( let i in obj) {
      if (obj.hasOwnProperty(i)) {
        total += obj[i]
      }
    }
    return total;
  }

  calculateRecPercent(obj2) {
    let perObj2 = {},
        total = this.calculateTotal(obj2);

    for (let k in obj2) {
      if (obj2.hasOwnProperty(k)) {
        perObj2[k] = obj2[k] / total;
      }
    }
    return perObj2;
  }

  calculateUserParts(userObj, percent) {
    let newRecPart = {},
        userTotal = this.calculateTotal(userObj);
    for (let m in percent) {
      if (percent.hasOwnProperty(m)) {
        newRecPart[m] = Math.floor(percent[m] * userTotal);
      }
    }
    return newRecPart;
  }

  calculateDiff(userInput, userRec) {
    let diff = {}
    for ( let o in userInput ) {
      if (userInput.hasOwnProperty(o)) {
        diff[o] = userRec[o] - userInput[o];
      }
    }
    return diff;
  }


  render(){
    let { stocks,  bonds,  funds,  annuities,  commodities, risklevel } = this.props,
        userInvestments = {
          stocks,  bonds,  funds,  annuities,  commodities
        },
        recommended = sample[risklevel],
        recObj = recommended.reduce((invest, item) => {
          if (item.investment === 'Investment Funds') {
            item.investment = 'Funds';
          }
          item.investment = item.investment.toLowerCase();
          invest[item.investment] = item.percentage;
          return invest;
        }, {}),
        percent = this.calculateRecPercent(recObj),
        recommendedPart = this.calculateUserParts(userInvestments, percent),
        difference = this.calculateDiff(userInvestments, recommendedPart);


        let recPercent = {}
        for ( let k in percent) {
          if (percent.hasOwnProperty(k)) {
            recPercent[k] = Math.ceil(percent[k] * 100);
          }
        }

    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
              <thead>
                <tr>
                  <th></th>
                  <th>Your Portfolio</th>
                  <th>Recommended</th>
                  <th>Move this much</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stocks</td>
                  <td>${stocks}</td>
                  <td>{recPercent.stocks}%</td>
                  <td>{difference.stocks}</td>
                </tr>
                <tr>
                  <td>Bonds</td>
                  <td>${bonds}</td>
                  <td>{recPercent.bonds}%</td>
                  <td>{difference.bonds}</td>
                </tr>
                <tr>
                  <td>Investment Funds</td>
                  <td>${funds}</td>
                  <td>{recPercent.funds}%</td>
                  <td>{difference.funds}</td>
                </tr>
                <tr>
                  <td>Annuities</td>
                  <td>${annuities}</td>
                  <td>{recPercent.annuities}%</td>
                  <td>{difference.annuities}</td>
                </tr>
                <tr>
                  <td>Commodities</td>
                  <td>${commodities}</td>
                  <td>{recPercent.commodities}%</td>
                  <td>{difference.commodities}</td>
                </tr>
              </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}