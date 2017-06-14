import React from 'react'
import SideBar from './SideBar'
import Menu from './Menu'

let style = {
    minHeight: '100vh',
    paddingTop: '20px'
}

const LayOut = (props) => (
    <main className='layout container' style={style}>
        <div className='row'>
            <SideBar className={'col-xs-3'}>
                <Menu />
            </SideBar>
            <section className='col-xs-9'>
                {props.children}
            </section>
        </div>
    </main>
)


export default LayOut 