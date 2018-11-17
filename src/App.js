import React, { Component } from 'react'
import axios from 'axios'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90b9c9bc'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      movies: []
    }
    this.getMovies = this.getMovies.bind(this)
  }


  getMovies(){
    axios.get(`${API_URL}&&s=${this.state.query}`)
      .then(({ data }) => {
        if(data.Response === "False"){
          alert(data.Error)
        }else{
          this.setState({
            movies: data.Search
          })
        }
      })
      .catch(function (error) {
          console.log(error);
        });
  }


  onChangeInput = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <div className="text-center">
      <div className="jumbotron" style={{backgroundColor: 'rgb(250, 235, 235)'}}>
        <input
          placeholder="Search for Movies"
          ref={input => this.search = input}
          onChange={this.onChangeInput}
        />
        <button style={{backgroundColor:'rgb(250, 235, 235)'}} onClick={this.getMovies}>Search</button>
        </div>
      {this.state.movies.map((data,i)=>{
        return(
          <div className="card container mt-2" key={i}>
            <div className="card-body">
              <h5 className="card-title">{data.Title}</h5>
              <img src={data.Poster} className="rounded" alt={data.Type}/>
              <footer className="card-footer mt-3 text-muted">Year: {data.Year}</footer>
            </div>
          </div>
        )})}
      </div>
    )
  }
}

export default App
