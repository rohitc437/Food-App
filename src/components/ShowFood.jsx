import "../styles/foodlist.css"

export const ShowFood = ({
    id,
    title,
    ingredients,
    time,
    instructions,
    image,
    handleDelete

})=>{
    return (
        <>
    <div className="foodList">
        <h5>Name Of Receipee</h5>
        <p>{title}</p>
        <h5>Ingredient of Receipe</h5>
        <p>{ingredients}</p>
        <h5>Cook Time</h5>
        <p>{time+"Min"}</p>
        <h5>All instructions</h5>
        <p>{instructions}</p>
        <h5>Image</h5>
        <img style={{width:"30%", height:"100"}} src={image} alt="pic"/>
        <br />
        {/* <button onClick={()=> handleDelete(id)}>Delete</button> */}
    </div>
        </>
    )
}