
const Path = ({ path, editing }) => {
    return (
        <div className="path-card">
            <h1>Leaving from {path.starting_location}</h1>
            <h1>Going to {path.destination}</h1>
            <p>Distance between: {path.distance_between} miles</p>
            { editing ? <button>Remove</button> : null }
        </div>
    )
}

export default Path