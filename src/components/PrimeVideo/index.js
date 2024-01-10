// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  return (
    <div className="bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img"
      />
      <div className="c">
        <h1 className="h1">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="h1">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
