import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu from '../components/Menu'
import Convector from '../components/Converter'
import Loger from '../components/Loger'
import Trader from '../components/Trader'
import * as convectorAction from '../actions/ConvectorAction'
import * as menuAction from '../actions/MenuAction'
import * as logerAction from '../actions/LogerAction'

class App extends Component {
  render() {
    const { menu, convector, loger } = this.props
    const { setNumbers } = this.props.convectorAction
    const { setActive } = this.props.menuAction
    const { updateLogers, updateLocalStorage } = this.props.logerAction

    return (
      <div className='app container'>
        <Menu active={menu.active} setActive={setActive} />
        {menu.active === 'Convector' ?  <Convector intIn1={convector.intIn1} intIn2={convector.intIn2} setNumbers={setNumbers} /> : '' }
        {menu.active === 'Logger' ?  <Loger logers={loger.logers} updateLogers={updateLogers} updateLocalStorage={updateLocalStorage} />: '' }
        {menu.active === 'Trader Info' ?  <Trader />: '' }
      </div>
    )
  }
}

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