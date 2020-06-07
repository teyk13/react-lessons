import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import myContext from './Context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    
    input: {
        marginRight: '1rem'
    },

    btntimes: {
        background: '#e6e6',
        borderRadius: '20%',
        color: '#ffff',
        border: 'none'
    }
}

function TodoItem({todo, index, onChange}) {
    
    const {removeTodo} = useContext(myContext)
    
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type='checkbox' 
                    checked={todo.completed}
                    style={styles.input} 
                    onChange={() => onChange(todo.id)}/>
                    {index + 1}
                    &nbsp;
                    {todo.title}
            </span>

            <button style={styles.btntimes} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem