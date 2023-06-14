import {useState} from 'react';
import Todo from './Todo';
import NewTodoList from './NewTodoList';
const { v4: uuidv4 } = require('uuid');

const TodoList = () => {
    const INITIALSTATE = [ {id: 1, task:'Walk the Dog'} ]
    const [todo,setTodo] = useState(INITIALSTATE);
    const addTodo = (task) => {
        setTodo(todo => [...todo, {task,id:uuidv4()}])
    }
    const removeTodo = (id,task) => {
        const test = {id,task}
      
        setTodo(todo => todo.filter(t => t.id !== test.id))
    }
    return (
        <div>
            <NewTodoList addTodo={addTodo}></NewTodoList>
            {todo.map(t => <Todo {...t} removeTodo={removeTodo}></Todo>)}
        </div>
        
    )
}

export default TodoList;