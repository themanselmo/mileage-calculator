
const Route = ({ route }) => {
    return (
        <>
            <h1>Leaving from {route.from}</h1>
            <h1>Going to {route.to}</h1>
            <p>Distance between: {route.distanceBetweenInMiles} miles</p>
        </>
    )
}

export default Route