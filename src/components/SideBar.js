import React from 'react'

let style = {
}

const SideBar = (props) => (
    <aside className={`side-bar ${props.className}`} style={style}>
        {props.children}
    </aside>
)


export default SideBar