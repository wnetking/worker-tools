import React from 'react'

const Checkbox = (props) => (
    <div className={`form-check col-form-label ${props.className}`}>
        <label className='form-check-label'>
            <input className='form-check-input' type='checkbox' value={props.value} onClick={props.onClick} />
            {props.children}
        </label>
    </div>

)


export default Checkbox