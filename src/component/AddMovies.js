import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { addMovies } from "../actions/index";
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90b9c9bc'

const mapDispatchToProps = dispatch => {
  return {
    addMovies: movies => dispatch(addMovies(movies))
  };
};

class AddMovies extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
    this.getMovies = this.getMovies.bind(this)
  }
  getMovies(){
    axios.get(`${API_URL}&&s=${this.state.query}`)
      .then(({ data }) => {
        if(data.Response === "False"){
          alert(data.Error)
        }else{
          this.props.addMovies(data.Search);
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
      <div className="jumbotron" style={{backgroundColor: 'rgb(250, 235, 235)'}}>
        <input
          placeholder="Search for Movies"
          ref={input => this.search = input}
          onChange={this.onChangeInput}
        />
        <button style={{backgroundColor:'rgb(250, 235, 235)'}} onClick={this.getMovies}>Search</button>
      </div>
    )
  }
}
const AddMoviesConnect = connect(null, mapDispatchToProps)(AddMovies);
export default AddMoviesConnect
