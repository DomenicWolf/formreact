const Box = ({width,height,color,removeBox,id}) => {
    return (
        <div key={id} id={id}style={{backgroundColor:color,width,height}}>
            <button onClick={() => removeBox(id,color,width,height)}>X</button>
        </div>
    )
}

export default Box;