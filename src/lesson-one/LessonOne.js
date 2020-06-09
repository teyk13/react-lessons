import React, {useEffect} from 'react'
import TodoList from './TodoList'
import myContext from './Context'
import AddTodo from './AddTodo'
import Loader from '../Loader'


function LessonOne() {
    
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(false)

            })
      }, [])

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

                {loading && 
                    <Loader />
                }

                {(todos.length > 0) ? 
                    <TodoList todos={todos} onToggle={toggleTodo} /> : 
                        loading ? null : 
                            <p> No todo, dude </p> 
                        
                }
            </myContext.Provider>
    ) 
}

export default LessonOne