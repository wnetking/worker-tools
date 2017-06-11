import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LogItem from '../components/Log'
import LogByDate from '../components/LogsByDate'

export default class Loger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logByDate: false
    };
    this.triggerlogByDate = this.triggerlogByDate.bind(this)
    this.onFocusTextarea = this.onFocusTextarea.bind(this)
  }

  triggerlogByDate() {
    this.setState({logByDate: !this.state.logByDate})
  }

  onFocusTextarea() {
    if (this.state.logByDate) {
      this.setState({logByDate: false})
    }
  }

  onSubmitForm() {
    if (ReactDOM.findDOMNode(this.refs.newLog).value === '') return
    const {logers} = this.props
    const newLog = [{
      date: String(new Date().toLocaleDateString()),
      time: String(new Date().toLocaleTimeString()),
      content: ReactDOM.findDOMNode(this.refs.newLog).value
    }]
    
    const newLogers = [].concat(newLog, logers)
    this.props.updateLogers(newLogers)
    this.props.updateLocalStorage(newLogers)
    ReactDOM.findDOMNode(this.refs.newLog).value = ''
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
        e.charCode === 10 && e.ctrlKey && ReactDOM.findDOMNode(this.refs.newLog).value != '' ? this.onSubmitForm() : ''
      }
    );
  }

  render() {
    const {logers, updateLogers, updateLocalStorage} = this.props
    const triggerlogByDate = this.state.logByDate
    const logersItem = logers.map((item, index) => {
        return (
          <div key={index}>
            <LogItem logContent={item.content} logDate={item.date} logTime={item.time} updateLogers={updateLogers} updateLocalStorage={updateLocalStorage} logers={logers}/>
          </div>
        )
      }
    )
    return (
      <div className='loger row'>
        <div className='col-xs-5'>
          <div className='form-group'>
            <textarea type='email' ref='newLog' onFocus={this.onFocusTextarea} className='form-control form-control-lg' placeholder='Пил чай ...'/>
            <small className='form-text text-muted'>Что делал сегодня?</small>
            <span>Уже {logers.length} записей</span>
          </div>
          <button type='button' className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}>Добавить</button>
          <button type='button' className='btn btn-link' onClick={this.triggerlogByDate}>Посмотреть по числу</button>
        </div>
        <div className='col-xs-7'>
          {!triggerlogByDate ?
            <div className='loger-content'>
              {logersItem}
            </div>
            :
            <div><LogByDate logers={logers} /></div>
          }
        </div>
      </div>
    )
  }
}