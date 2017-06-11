import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Convector from './Converter'
import Loger from './Loger'
import Trader from './Trader'
import Layout from '../components/Layout'
import Todo from './Todo'
import * as convectorAction from '../actions/ConvectorAction'
import * as menuAction from '../actions/MenuAction'
import * as logerAction from '../actions/LogerAction'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    const { convector, loger } = this.props
    const { setNumbers } = this.props.convectorAction
    const { updateLogers, updateLocalStorage } = this.props.logerAction

    return (
      <Router>
        <Layout>        
          <Route exact path='/' render={() => (
            <Convector intIn1={convector.intIn1} intIn2={convector.intIn2} setNumbers={setNumbers} />
          )} />
          <Route path='/loger' render={() => (
            <Loger logers={loger.logers} updateLogers={updateLogers} updateLocalStorage={updateLocalStorage} />
          )} />
          <Route path='/trader' render={() => (
            <Trader />
          )} />
           <Route exact strict path='/todo' render={() => (
            <Todo />
          )} />
           <Route strict path='/todo/:id' component={TodoEl} />
        </Layout>
      </Router>
    )
  }
}

const TodoEl = ({ match }) => (
    <div>
        <h2>Todo id: {match.params.id}</h2>
    </div>
)

function mapStateToProps(state) {
  return {
    convector: state.convector,
    menu: state.menu,
    loger: state.loger
  }
}
function mapDispatchToProps(dispatch) {
  return {
    convectorAction: bindActionCreators(convectorAction, dispatch),
    menuAction: bindActionCreators(menuAction, dispatch),
    logerAction: bindActionCreators(logerAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)