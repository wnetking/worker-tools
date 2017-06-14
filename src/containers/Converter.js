import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import NumberInput from '../components/NumberInput'
import Checkbox from '../components/Checkbox'

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
        let val1 = ReactDOM.findDOMNode(this.intIn1).value === '' ? 0 : ReactDOM.findDOMNode(this.intIn1).value;
        let val2 = ReactDOM.findDOMNode(this.intIn2).value === '' ? 0 : ReactDOM.findDOMNode(this.intIn2).value;
        this.props.setNumbers(Number(val1), Number(val2));
    }

    render() {
        const { intIn1, intIn2 } = this.props
        const em = this.state.em
        const resultMeasure = em ? 'em' : '%'
        return (
            <div className='convector row'>
                <div className='col-xs-12'>
                    <div className='form-group row'>
                        <NumberInput className='col-xs-6' id='basic-addon1' Inputref={el => this.intIn1 = el}  placeholder={intIn1} onChange={this.onChange.bind(this)}>
                            Первое число
                        </NumberInput>
                        <NumberInput className='col-xs-6' id='basic-addon2' Inputref={el => this.intIn2 = el}  placeholder={intIn2} onChange={this.onChange.bind(this)}>
                            Доля от первого числа
                        </NumberInput>
                        <Checkbox className='col-xs-12' onClick={this.triggerEm}>Расчитать как em</Checkbox>
                    </div>
                </div>
                <div className='col-xs-12'>
                    <Card header={`Результат в ${resultMeasure}`}>
                        <span>{em ? (((intIn2 * 100) / intIn1) / 100).toFixed(2) : ((intIn2 * 100) / intIn1).toFixed(2)}</span>
                    </Card>
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