import React, { Component } from 'react'
import RetrieveMovies from "./component/RetrieveMovies"
import AddMovies from "./component/AddMovies"
class App extends Component {
  render() {
    return (
      <div className="text-center">
      <AddMovies/>
      <RetrieveMovies/>
      </div>
    )
  }
}
export default App
