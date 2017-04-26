import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LogItem from './Log'

export default class Loger extends Component {

  onSubmitForm() {
    const {logers} = this.props
    const newLogers = [].concat(ReactDOM.findDOMNode(this.refs.newLog).value, logers)
    this.props.updateLogers(newLogers);
    ReactDOM.findDOMNode(this.refs.newLog).value = ''
  }

  render() {
    const {logers} = this.props
    const logersItem = logers.map((item, index) => {
        return (
          <p><LogItem logContent={item} key={index}/></p>
        )
      }
    )
    return (
      <div className='loger row'>
        <div className='col-xs-5'>
          <div className='form-group'>
            <input type='email' ref='newLog' className='form-control form-control-lg' placeholder='Пил чай ...'/>
            <small className='form-text text-muted'>Что делал сегодня?</small>
          </div>
          <button type='button' className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}>Добавить</button>
        </div>
        <div className='col-xs-7'>
          <p className='alert alert-info'>
            {logersItem}
          </p>
        </div>
      </div>
    )
  }
}

Loger.propTypes = {}