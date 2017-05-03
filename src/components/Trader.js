import React, {Component} from 'react'

export default class Trader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currencies: [{
        'r030': 12,
        'txt': 'Алжирський динар',
        'rate': 0.247509,
        'cc': 'DZD',
        'exchangedate': '03.05.2017'
      }, {
        'r030': 944,
        'txt': 'Азербайджанський манат',
        'rate': 15.544328,
        'cc': 'AZN',
        'exchangedate': '03.05.2017'
      }]
    };
    this.currency = this.currency.bind(this);
  }

  currency() {
    var myInit = {
      mode: 'cors'
    }

    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', myInit)
      .then(function(response) {
        console.log(response)
        return response;
      })
      .then(function(all) {
        console.log(all);
      })
  }


  render() {
    return (
      <div className='trader'>
        <button className='btn btn-default btn-xs' onClick={this.currency}>Валюта</button>
        <ul className='list-group'>
          {
            this.state.currencies.map((item, index) => {
                return (
                  <li className='list-group-item justify-content-between' key={index}>
                    {item.txt}
                    <span className='badge badge-default badge-pill'>{item.rate}</span>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}