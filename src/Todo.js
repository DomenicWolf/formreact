

const Todo = ({id,removeTodo,task}) => {
    return (
        <div key={id} id={id}>
            <h4>{task}</h4>
            <button onClick={() => removeTodo(id,task)}>X</button>
        </div>
    )
}

export default Todo;