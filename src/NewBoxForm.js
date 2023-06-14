import Box from './Box';
import {useState} from "react"

const NewBoxForm = ({addBox}) => {
    const INITIALSTATE = {
        width: "",
        height: "",
        color: ""
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
        const {color,width,height} = formData;
        setFormData(INITIALSTATE)
        addBox(color,width,height)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Color</label>
            <input
            id='color'
            type='text'
            name='color'
            placeholder='color'
            value={formData.color}
            onChange={handleChange}
            />

            <label htmlFor='width'>Width</label>
            <input
            id='width'
            type='text'
            name='width'
            placeholder='width'
            value={formData.width}
            onChange={handleChange}
            />

            <label htmlFor='height'>Height</label>
            <input
            id='heigh'
            type='text'
            name='height'
            placeholder='height'
            value={formData.height}
            onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;