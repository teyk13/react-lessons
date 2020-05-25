import React from 'react'
import TodoList from './TodoList'

function LessonOne() {
      
    const todos = [
        {id: 1, completed: false, title: 'Learn JavaScript'},
        {id: 2, completed: false, title: 'Learn JSX'},
        {id: 3, completed: false, title: 'Learn React'},
      ]
  
    return(
        <TodoList todos={todos}/>
    )
}

export default LessonOne;