import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form: {
        margginBottom: '1rem'
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
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add to do</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo