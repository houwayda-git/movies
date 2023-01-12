import react, { useState } from "react";

const AddMovie = ({ addMovie }) => {

    const [add, setAdd] = useState("");

    const handleAdd = (e) => {
        setAdd(e.target.value)
    }

    const handleSave = () => {
        addMovie(add)
    }
    return (
        <>

            <button className="add" onClick={handleSave}>Add</button>
            <input type="text"
                className="inputText"
                placeholder="Enter movie name..."
                onChange={handleAdd}
                value={add}
            >
            </input>

        </>
    )
}
export default AddMovie;