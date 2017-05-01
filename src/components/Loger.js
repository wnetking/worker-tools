import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LogItem from './Log'

export default class Loger extends Component {

  onSubmitForm() {
    const {logers} = this.props
    const newLog = {
      date: String(new Date().toLocaleString()),
      content: ReactDOM.findDOMNode(this.refs.newLog).value
    }

    const newLogers = [].concat(newLog, logers)
    this.props.updateLogers(newLogers);
    ReactDOM.findDOMNode(this.refs.newLog).value = ''
  }

  componentDidMount(){
    document.addEventListener('keypress', (e) =>
      e.charCode === 13 && ReactDOM.findDOMNode(this.refs.newLog).value != '' ?  this.onSubmitForm(): ''
    );
  }


  render() {
    const {logers} = this.props
    const logersItem = logers.map((item, index) => {
        return (
          <div key={index}><LogItem logContent={item.content} logDate={item.date}/></div>
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
          <div className='alert alert-info'>
            {logersItem}
          </div>
        </div>
      </div>
    )
  }
}

Loger.propTypes = {}