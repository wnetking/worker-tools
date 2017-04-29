import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LogItem from './Log'

export default class Loger extends Component {

  onSubmitForm() {
    if (ReactDOM.findDOMNode(this.refs.newLog).value === '') return
    const { logers } = this.props
    const newLog = [{
      date: String(new Date().toLocaleDateString()),
      time: String(new Date().toLocaleTimeString()),
      content: ReactDOM.findDOMNode(this.refs.newLog).value
    }]
    const newLogers = [].concat(newLog, logers)
    this.props.updateLogers(newLogers)
    this.props.updateLocalStorage(newLogers);
    ReactDOM.findDOMNode(this.refs.newLog).value = ''
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      e.charCode === 10 && e.ctrlKey && ReactDOM.findDOMNode(this.refs.newLog).value != '' ? this.onSubmitForm() : ''
    }
    );
  }
  
  render() {
    const { logers, updateLogers, updateLocalStorage } = this.props
    const logersItem = logers.map((item, index) => {
      return (
        <div key={index}>
          <LogItem logContent={item.content}
            logDate={item.date}
            logTime={item.time}
            updateLogers={updateLogers}
            updateLocalStorage={updateLocalStorage}
            logers={logers} />
        </div>
      )
    }
    )
    return (
      <div className='loger row'>
        <div className='col-xs-5'>
          <div className='form-group'>
            <textarea type='email' ref='newLog' className='form-control form-control-lg' placeholder='Пил чай ...' />
            <small className='form-text text-muted'>Что делал сегодня?</small>
            <span>Уже {logers.length} записей</span>
          </div>
          <button type='button' className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}>Добавить</button>
        </div>
        <div className='col-xs-7'>
          <div className='loger-content'>
            {logersItem}
          </div>
        </div>
      </div>
    )
  }
}