import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

export default class Converter extends Component {
    onChange() {
        let val1 = ReactDOM.findDOMNode(this.refs.intIn1).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.intIn1).value;
        let val2 = ReactDOM.findDOMNode(this.refs.intIn2).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.intIn2).value;
        this.props.setNumbers(Number(val1), Number(val2));
    }
    render() {
        const { intIn1, intIn2 } = this.props
        return (
            <div className='convector row'>
                <div className='col-xs-5'>
                    <div className='form-group row'>
                        <label className='col-xs-12 col-form-label'>Первое число</label>
                        <div className='col-xs-12'>
                            <input className='form-control form-control-lg' ref='intIn1' type='number' placeholder={intIn1} onChange={this.onChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-xs-12 col-form-label'>Второе число</label>
                        <div className='col-xs-12'>
                            <input className='form-control form-control-lg' ref='intIn2' type='number' placeholder={intIn2} onChange={this.onChange.bind(this)}></input>
                        </div>
                    </div>
                </div>
                <div className='col-xs-7'>
                    <label className='col-form-label'>Результат в %</label>
                    <p className='alert alert-info'><span>{((intIn2 * 100) / intIn1).toFixed(2)}</span></p>
                </div>
            </div>
        )
    }
}

Converter.propTypes = {
    intIn1: PropTypes.number.isRequired,
    intIn2: PropTypes.number.isRequired,
    setNumbers: PropTypes.func.isRequired
}