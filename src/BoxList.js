import { useState } from "react"
import Box from './Box'
import NewBoxForm from './NewBoxForm'
const { v4: uuidv4 } = require('uuid');

const BoxList = () => {
    const INITIALSTATE = [ {id: 1,color:'teal',width:'200px',height:'200px'} ]
    const [box,setBox] = useState(INITIALSTATE);
    const addBox = (color,width,height) => {
        setBox(box => [...box, {color,width,height,id:uuidv4()}])
    }
    const removeBox = (id,color,width,height) => {
        const test = {id,color,width,height}
       console.log(test.id)
       console.log(box[0].id)
        setBox(box => box.filter(b => b.id !== test.id))
    }
    return (
        <div>
            <NewBoxForm addBox={addBox}></NewBoxForm>
            {box.map(b => <Box {...b} removeBox={removeBox}></Box>)}
        </div>
        
    )
}

export default BoxList