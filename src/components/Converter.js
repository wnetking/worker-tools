import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            em: false
        };
        this.triggerEm = this.triggerEm.bind(this)
    }
    triggerEm() {
        this.setState({ em: !this.state.em });
    }
    onChange() {
        let val1 = ReactDOM.findDOMNode(this.refs.intIn1).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.intIn1).value;
        let val2 = ReactDOM.findDOMNode(this.refs.intIn2).value === '' ? 0 : ReactDOM.findDOMNode(this.refs.intIn2).value;
        this.props.setNumbers(Number(val1), Number(val2));
    }
    render() {
        const { intIn1, intIn2 } = this.props
        const em = this.state.em;
        return (
            <div className='convector row'>
                <div className='col-xs-5'>
                    <div className='form-group row'>
                        <div className='col-xs-12 input-group'>
                            <input aria-describedby='basic-addon1' className='form-control form-control-lg' ref='intIn1' type='number' placeholder={intIn1} onChange={this.onChange.bind(this)}></input>
                            <span className='input-group-addon' id='basic-addon1'>Первое число</span>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-xs-12 input-group'>
                            <input aria-describedby='basic-addon2' className='form-control form-control-lg' ref='intIn2' type='number' placeholder={intIn2} onChange={this.onChange.bind(this)}></input>
                            <span className='input-group-addon' id='basic-addon2'>Доля от первого числа</span>
                        </div>
                    </div>
                    <div className='form-check col-form-label'>
                        <label className='form-check-label'>
                            <input className='form-check-input' type='checkbox' value='' onClick={this.triggerEm} />
                            Расчитать как em
                        </label>
                    </div>
                </div>
                <div className='col-xs-7'>
                    <div className='card'>
                        <div className='card-header'>Результат в {em ? <span>em</span> : <span>%</span>}</div>
                        <div className='card-block'>
                            <p className='card-text'>
                                <span>{em ? (((intIn2 * 100) / intIn1) / 100).toFixed(2) : ((intIn2 * 100) / intIn1).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
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