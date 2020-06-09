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
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')
    
function submitHandler(event) {   
    event.preventDefault()  

    if (input.value().trim()) {
        onCreate(input.value())
        input.clear()
    }
}

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind}/>
            <button className='Btn_Lessons' type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo