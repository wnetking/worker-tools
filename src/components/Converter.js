import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

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
                        <label className='col-xs-12 col-form-label'>Первое число</label>
                        <div className='col-xs-12'>
                            <input className='form-control form-control-lg' ref='intIn1' type='number' placeholder={intIn1} onChange={this.onChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-xs-12 col-form-label'>Доля от первого числа</label>
                        <div className='col-xs-12'>
                            <input className='form-control form-control-lg' ref='intIn2' type='number' placeholder={intIn2} onChange={this.onChange.bind(this)}></input>
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
                    <label className='col-form-label'>Результат в {em ? <span>em</span> : <span>%</span>}</label>
                    <p className='alert alert-info'><span>{em ? (((intIn2 * 100) / intIn1) / 100).toFixed(2) : ((intIn2 * 100) / intIn1).toFixed(2)}</span></p>
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