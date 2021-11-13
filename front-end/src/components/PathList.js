import Path from "./Path"
import PathForm from "./PathForm"
import { useState } from "react"

const PathList = ({ paths }) => {

    const [editing, setEditing] = useState(false)

    function handleEditing() {
        setEditing(!editing)
    }

    return (
        <>
            <PathForm onEdit={handleEditing}/>
            {paths.map((path) => <Path path={path} editing={editing}/>)}
        </>
    )
}

export default PathList