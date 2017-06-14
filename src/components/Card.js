import React from 'react'

const Card = (props) => (
    <div className='card'>
        <div className='card-header'>{props.header}</div>
        <div className='card-block'>
            <div className='card-text'>
                <span>{props.children}</span>
            </div>
        </div>
    </div>
)

export default Card