import RouteList from './RouteList'

function App() {
  const mockRoutes = [
    { from: "home", to: "work", distanceBetweenInMiles: 30 },
    { from: "home", to: "school", distanceBetweenInMiles: 15 },
    { from: "home", to: "StopNShop", distanceBetweenInMiles: 5 }

  ]
  return (
    <div className="App">
      <RouteList routes={mockRoutes}/>
    </div>
  );
}

export default App;
