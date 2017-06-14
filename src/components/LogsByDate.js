import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class LogByDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      formatedDate: moment()._d.toLocaleDateString()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log()
    this.setState({
      formatedDate: date._d.toLocaleDateString(),
      startDate: date
    });
  }

  render() {
    const {logers} = this.props

    const content = logers.filter((item) => {
      return (item.date === this.state.formatedDate)
    }).map((item, index) => {
        return (
          <li className='list-group-item' key={index}>{item.content}</li>
        )
      }
    )

    return (
      <div className='card'>
        <div className='card-header'>
          <DatePicker selected={this.state.startDate} selectsStart onChange={this.handleChange} filterDate={this.isWeekday}/>
        </div>
        <div className='card-block'>
          <div className='card-text'>
            <ul className='list-group'>
              {content}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}