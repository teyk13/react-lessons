import React from 'react'
import TodoList from './TodoList'
import myContext from './Context'
import AddTodo from './AddTodo'


const styles = {
    p: {
        margin: '0',
        padding: '0',
        fontSize: '.85em'
    }
}

function LessonOne() {
    
    const [todos, setTodos] = React.useState([
        {id: 1, completed: true, title: 'Learn JavaScript'},
        {id: 2, completed: true, title: 'Learn JSX'},
        {id: 3, completed: false, title: 'Learn React'},
      ])

    function toggleTodo(id) {
          setTodos(
              todos.map( todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
          })
        )
    }
    
    function removeTodo(id) {
            setTodos(
                todos.filter(todo => todo.id !== id)
            )
        }

    function addTodo(title) {
        setTodos(
            todos.concat([{
                title,
                id: Date.now(),
                completed: false
            }])
        )
    }
    
    // https://ru.reactjs.org/docs/context.html#caveats

    return(
        <myContext.Provider value={{removeTodo}}>     
            <AddTodo onCreate={addTodo}/>
            {
            (todos.length > 0) ?
                <TodoList todos={todos} onToggle={toggleTodo} /> : <p style={styles.p}>No todo, dude</p>
            }
        </myContext.Provider>
    ) 
}

export default LessonOne;