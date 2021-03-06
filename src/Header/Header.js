import React from 'react'
import './Header.scss'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import Sort from '../Sort/Sort'

const Header = ({
  movies,
  showForm,
  displayContent,
  showSort,
  displaySortedMovies,
  sortedMovies,
}) => {

  const filteredMovies = movies.filter((movie) => !movie["backdrop_path"].includes('NoPhotoAvailable'));
  let randomMovie = Math.floor(Math.random() * filteredMovies.length);
  let randomMovieHeader = filteredMovies[randomMovie];
  let randomMoveImg = randomMovieHeader["backdrop_path"]
  let year = randomMovieHeader.release_date.split("-")[0]

  return (
    <>
      <header className="mainHeader">
        <div className="subHeader">
          <div className="forms">
            {showForm && (
              <Form movies={movies} displayContent={displayContent} />
            )}
            {showSort && (
              <Sort
                movies={movies}
                sortedMovies={sortedMovies}
                displaySortedMovies={displaySortedMovies}
              />
            )}
          </div>
          <div>
            <h1 className="appTitle">Rancid Tomatillos</h1>
          </div>
        </div>
        <div className="movieHeader">
          <div className="headerInfo">
            <h2 className="headerTitle">{randomMovieHeader.title}</h2>
            <div className="headerText">
              <p className="headerYear">{year}</p>
            </div>
          </div>
          <div className="randomMovieImage">
              <img
                className="headerImage"
                src={randomMoveImg}
                alt={`${randomMovieHeader.title}-poster`}
              />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

Header.propTypes = {
  movies: PropTypes.array,
  showForm: PropTypes.bool,
  displayContent: PropTypes.func,
  showSort: PropTypes.bool,
  displaySortedMovies: PropTypes.func,
  sortedMovies: PropTypes.array,
}
