import React from 'react'
import PropTypes from 'prop-types'

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

function TodoItem({todo, index}) {
    return(
        <li style={styles.li}>
            <span>
                <input type='checkbox' style={styles.input} onChange={() => console.log(todo.id)}/>
                {index + 1}
                &nbsp;
                {todo.title}
            </span>

            <button style={styles.btntimes}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem