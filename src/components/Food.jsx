import { useRef,useState } from "react";
import "../styles/food.css"

export const Food = ({getData}) => {
    const [food,setFood] = useState(null);
    const fileRef = useRef(null);

    const handleChange = (e) => {
        let {name,value,type} = e.target;
        value = type === "file" ? URL.createObjectURL(fileRef.current.files[0]):value;

        setFood({...food,[name]:value})
    };

    const submittedData = (e) => {
        e.preventDefault();
        getData(food)
    }

    return (
        <>
        <form onSubmit={submittedData}>
        <label>Name </label>
        <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Enter Title"
            ></input>
        <label>Ingradients </label>
        <input
            onChange={handleChange}
            type="text"
            name="ingredients"
            placeholder="Enter Ingradients"
            ></input>
        <label>Time To Cook </label>
        <input
            onChange={handleChange}
            type="Number"
            name="time"
            placeholder="Time for cook In "
            ></input>
        <label>Instructions </label>
        <input
            onChange={handleChange}
            type="Text"
            name="instructions"
            placeholder="Enter Instructions"
            ></input>
        <label>Image</label>
        <input
            onChange={handleChange}
            type="file"
            name="image"
            ref={fileRef}
            ></input>
        <input className="button" type="submit" name="Submit"/>
        
        </form>
        
        </>
    )
}