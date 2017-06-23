import React from 'react'

let AddTodo = (props) => {
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) return

    props.addTodo(input.value)
    input.value = ''
  }

  return (
    <form onSubmit={onSubmit} className='offset-bottom'>
      <div className='input-group'>
        <input ref={node => { input = node }} type="text" className="form-control" placeholder="Add new todo" />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>Add</button>
        </span>
      </div>
    </form>
  )
}

export default AddTodo