import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        width: '100%',
        height: '120px'
    },
    
    input: {
        margin: 'auto',
        background: 'white',
        flexBasis: '80%',
        border: '1px solid #bbb',
        borderRadius:'20px',
    },
    
    button: {
        background: '#1abc9c',
        border:'none',
        borderRadius:'20px',
        color: 'white',
        cursor: 'pointer'
    }
}

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    
function submitHandler(event) {
    
    event.preventDefault()  

    if (value.trim()) {
        onCreate(value)
        setValue('')
    }
}

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
            <button style={styles.button} type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo