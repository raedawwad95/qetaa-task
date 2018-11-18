import React from 'react'
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { movies: state.movies };
};
const RetrieveMovies = ({ movies }) =>(
  <div>
  {movies.map((data,i)=>(

      <div className="card container mt-2" key={i}>
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <img src={data.Poster} className="rounded" alt={data.Type}/>
          <h6 className="mt-3">{data.Plot}</h6>
          <footer className="card-footer mt-3 text-muted d-flex justify-content-between">
          <p>Director: {data.Director}</p>
          <p>Writer: {data.Writer}</p>
          <p> Year: {data.Year}</p>
          </footer>
        </div>
      </div>
    ))}
  </div>
)

const RetrieveMoviesConnect = connect(mapStateToProps)(RetrieveMovies);
export default RetrieveMoviesConnect
