import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

export default class LogItem extends Component {
  render() {
    const {logContent, logDate} = this.props
    return (
      <div className='alert alert-warning'>
        <p>{logDate}</p>
        {logContent}
      </div>
    )
  }
}