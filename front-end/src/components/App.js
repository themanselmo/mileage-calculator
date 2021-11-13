import PathList from './PathList'
import { useState, useEffect } from 'react'

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [paths, setPaths] = useState([])
  const pathsURL = "http://localhost:9292/paths"
  const userURL = "http://localhost:9292/user"
  
  useEffect(()=> {
    fetch(userURL)
    .then(res => res.json())
    .then(data => setCurrentUser(data))
  }, [])

  useEffect(()=> {
    fetch(pathsURL)
    .then(res => res.json())
    .then(data => setPaths(data))
  }, [])

  // const mockPaths = [
  //   { from: "home", to: "work", distanceBetweenInMiles: 30 },
  //   { from: "home", to: "school", distanceBetweenInMiles: 15 },
  //   { from: "home", to: "StopNShop", distanceBetweenInMiles: 5 }
  // ]
  
  console.log(currentUser)
  console.log(paths)
  return (
    <div className="App">
      <PathList paths={paths}/>
    </div>
  );
}

export default App;
