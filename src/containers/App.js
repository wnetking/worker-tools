import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu from '../components/Menu'
import Convector from '../components/Converter'
import * as convectorAction from '../actions/ConvectorAction'
import * as menuAction from '../actions/MenuAction'

class App extends Component {
    render() {
        const { menu, convector } = this.props
        const { setNumbers } = this.props.convectorAction
        const { setActive } = this.props.menuAction
        return (
            <div className='app container'>
                <Menu active={menu.active} setActive={setActive}/>
                <Convector intIn1={convector.intIn1}  intIn2={convector.intIn2} setNumbers={setNumbers} />
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    convector: state.convector,
    menu: state.menu
  }
}
function mapDispatchToProps(dispatch) {
  return {
    convectorAction: bindActionCreators(convectorAction, dispatch),
    menuAction: bindActionCreators(menuAction, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)