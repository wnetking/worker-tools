import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Convector from './Converter'
import Loger from './Loger'
import Trader from './Trader'
import Layout from '../components/Layout'
import Todo from './todo'
import {appPath} from '../appSettings'
import * as convectorAction from '../actions/ConvectorAction'
import * as menuAction from '../actions/MenuAction'
import * as logerAction from '../actions/LogerAction'
import * as todoAction from '../actions/TodoAction'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class Main extends Component {
  render() {
    const { convector, loger, todo } = this.props
    const { setNumbers } = this.props.convectorAction
    const { updateLogers} = this.props.logerAction
    const { addTodo, toggleTodo, deleteTodo} = this.props.todoAction

    return (
      <Router>
        <Layout>        
          <Route exact path={appPath} render={() => (
            <Convector intIn1={convector.intIn1} intIn2={convector.intIn2} setNumbers={setNumbers} />
          )} />
          <Route path={`${appPath}loger`} render={() => (
            <Loger logers={loger.logers} updateLogers={updateLogers}/>
          )} />
          <Route path={`${appPath}trader`} render={() => (
            <Trader />
          )} />
           <Route exact strict path={`${appPath}todo`} render={() => (
            <Todo todo={todo} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )} />
        </Layout>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    convector: state.convector,
    menu: state.menu,
    loger: state.loger,
    todo: state.todo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    convectorAction: bindActionCreators(convectorAction, dispatch),
    menuAction: bindActionCreators(menuAction, dispatch),
    logerAction: bindActionCreators(logerAction, dispatch),
    todoAction: bindActionCreators(todoAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)