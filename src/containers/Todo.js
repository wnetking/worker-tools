import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

import {
    Link
} from 'react-router-dom'

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.addTodoListLink = this.addTodoListLink.bind(this)
    }

    componentDidMount() {

    }

    addTodoListLink(){
       console.log(ReactDOM.findDOMNode(this.refs.nameTodo).value) 
    }

    render() {
        return (
            <div>
                <div className='input-group'>
                    <input ref='nameTodo' type='text' className='form-control' aria-label='' placeholder='Name of todo list' />
                    <div className='input-group-btn'>
                        <button className='btn btn-default' type='button' onClick={this.addTodoListLink}>+</button>
                    </div>
                </div>
                <ul>
                    <li><Link to='/todo/1'>First</Link></li>
                    <li><Link to='/todo/2'>Second</Link></li>
                </ul>

                <div className='content'>
                   
                </div>
            </div>
        )
    }
}



// Todo.propTypes = {
//     intIn1: PropTypes.number.isRequired
// }