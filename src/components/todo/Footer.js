import React from 'react'

let Footer = (props) => (
  <div className='btn-group btn-group-lg' role='group' aria-label='Basic example'>
    <button type='button' className='btn btn-secondary' onClick={()=>props.onClick('SHOW_ALL')}>All</button>
    <button type='button' className='btn btn-secondary' onClick={()=>props.onClick('SHOW_COMPLETED')}>Completed</button>
    <button type='button' className='btn btn-secondary' onClick={()=>props.onClick('SHOW_ACTIVE')}>Active</button>
  </div>
)

export default Footer