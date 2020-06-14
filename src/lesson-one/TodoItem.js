import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import myContext from './Context'


function TodoItem({todo, index, onChange}) {
    
    const {removeTodo} = useContext(myContext)
    
    const classes = []

    return(
        <li className='todoItems'>
            <span className={`todoItems` + classes.join(' ')}>
                <input className='todoItems' type='checkbox' 
                    checked={todo.completed} 
                    onChange={() => onChange(todo.id)}/>
                    {index + 1}
                    &nbsp;
                    {todo.title}
            </span>

            <button className='Btn_Remove' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem