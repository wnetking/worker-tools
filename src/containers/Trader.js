import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from '../components/Card'

export default class Trader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalRevenue: 0
    }

    this.currencyCalculation = this.currencyCalculation.bind(this)
  }

  currencyCalculation() {
    let automateExchenge = Number(ReactDOM.findDOMNode(this.refs.automateExchenge).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.automateExchenge).value)
    let noExchengeInUsd = Number(ReactDOM.findDOMNode(this.refs.noExchengeInUsd).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.noExchengeInUsd).value)
    let exchangeRate = Number(ReactDOM.findDOMNode(this.refs.exchangeRate).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.exchangeRate).value)

    this.setState({ totalRevenue: (automateExchenge + (noExchengeInUsd * exchangeRate)) });
  }

  render() {
    let totalRevenue = this.state.totalRevenue
    return (
      <div className='trader row'>
        <div className='col-xs-5'>
          <div className='form-group'>
            <p>Сумма что поменялась автоматически</p>
            <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
              <div className='input-group-addon'>грн</div>
              <input type='number' onChange={this.currencyCalculation} ref='automateExchenge' className='form-control' placeholder='Сумма' />
            </div>
          </div>
          <div className='form-group'>
            <p>Сума которая не поменялась</p>
            <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
              <div className='input-group-addon'>$</div>
              <input type='number' onChange={this.currencyCalculation} ref='noExchengeInUsd' className='form-control' id='inlineFormInputGroup' placeholder='Сумма' />
            </div>
          </div>
          <div className='form-group'>
            <p>Курс НБУ на день обязательного обмена</p>
            <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
              <div className='input-group-addon'>грн</div>
              <input type='number' onChange={this.currencyCalculation} ref='exchangeRate' className='form-control' id='inlineFormInputGroup' placeholder='Сумма' />
            </div>
          </div>
        </div>
        <div className='col-xs-7'>
          <Card header={`Общий доход : ${totalRevenue.toFixed(4)} грн`}>
            <h6 className='card-title'>Налог 5% от общего дохода</h6>
            {(totalRevenue * 0.05).toFixed(4)} <small>грн</small>
          </Card>
        </div>
      </div>
    )
  }
}