import { useState } from "react";


const NewTodoList = ({addTodo}) => {
    const INITIALSTATE = {
        task: ""
    }
    const [formData,setFormData] = useState(INITIALSTATE)
    const handleChange = e => {
        const {name,value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {task} = formData;
        setFormData(INITIALSTATE)
        addTodo(task)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task</label>
            <input
            id='task'
            type='text'
            name='task'
            placeholder='task'
            value={formData.task}
            onChange={handleChange}
            />

            <button>Add new todo!</button>
        </form>
    )
}

export default NewTodoList;