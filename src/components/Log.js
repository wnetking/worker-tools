import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

export default class LogItem extends Component {
  render() {
    const {logContent} = this.props
    return (
      <p className='alert alert-warning'>
        {logContent}
      </p>
    )
  }
}