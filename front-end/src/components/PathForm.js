import { useState } from 'react'

const PathForm = ({ onEdit }) => {

    const [formData, setFormData] = useState({
        startPoint: "",
        destination: "",
        distanceBetween: "",
        roundTrip: ""
    })

    return (
        <div id="Path-Form">
            <form>
                <p>Add A New Path</p>
                <label>Start Point:</label>
                <input type="text"></input>
                <label>Destination:</label>
                <input type="text"></input>
                <label>Distance Between:</label>
                <input type="text"></input>
                <label>Round Trip?</label>
                <select> 
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <button>Add</button>
            </form>
            <button onClick={onEdit}>Edit Paths</button>
        </div>
    )
}

export default PathForm