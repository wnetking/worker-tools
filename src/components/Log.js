import React, { Component } from 'react'

export default class LogItem extends Component {

  deleteLog() {
    const { logers, logContent, logTime } = this.props
    const newData = logers.filter((item) => {
      return (item.content !== logContent && item.time !== logTime)
    })
    this.props.updateLogers(newData);
    this.props.updateLocalStorage(newData);
  }

  render() {
    const { logContent, logDate, logTime } = this.props

    return (
      <div className='card log-item'>
        <div className='card-header'>
          <small>{logDate}</small>
          <small>{logTime}</small>
          <button type='button' className='btn btn-default btn-sm close-btn' onClick={this.deleteLog.bind(this)}>x</button>
        </div>
        <div className='card-block'>
          <p className='card-text'>
            {logContent}
          </p>
        </div>
      </div>
    )
  }
}