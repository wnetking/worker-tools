import React from 'react'

const NumberInput = (props) => (
    <div className={`input-group ${props.className}`}>
        <input aria-describedby={props.id} 
               className='form-control form-control-lg' 
               ref={props.Inputref} type='number' 
               placeholder={props.placeholder} 
               onChange={props.onChange}></input>
        <span className='input-group-addon' id={props.id}>
            {props.children}
        </span>
    </div>
)


export default NumberInput