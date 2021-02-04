import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../Data/movieData';
import './App.css'
import tomatillo from '../assets/tomatillo.png'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: {},
      isHomePage: true
    }
  }

  displayMovieDetails = (id) => {
  const targetedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({
      currentMovie: targetedMovie,
      isHomePage: false
    })    
  }

  backToMain = () => {
    this.setState({
      isHomePage: true,
      currentMovie: {}
    })
  }

  render() {
    return (
      <main>
        <header>
          <img className="tomatilloLogo" src={tomatillo} />
          <h1>Rancid Tomatillos</h1>
        </header>

        {this.state.isHomePage && (
          <Movies
            movies={this.state.movies}
            displayMovieDetails={this.displayMovieDetails}
          />
        )}

        {this.state.currentMovie && !this.state.isHomePage && (
          <MovieDetails
            currentMovie={this.state.currentMovie}
            backToMain={this.backToMain}
          />
        )}
      </main>
    );
  }
}

export default App;


//movies component - all movies
// we click on a single movie to display a moviedetail component
// onClicks needs to happen on the poster image in Card component
// then that triggers a displayCards shown from moviedetail component
//find the movie in that movies data that matches the id that we targeted by a click, we pass that to
// moviedetails as props