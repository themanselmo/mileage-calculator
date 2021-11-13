import Route from "./Route"

const RouteList = ({ routes }) => {
    return (
        <>
            {routes.map((route) => <Route route={route} />)}
        </>
    )
}

export default RouteList