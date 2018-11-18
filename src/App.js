import React, { Component } from 'react'
import RetrieveMovies from "./component/RetrieveMovies"
import AddMovies from "./component/AddMovies"
// import store from "./store/index";
// import { addMovies } from "./actions/index";
// window.store = store;
// window.addMovies = addMovies;
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
