import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setFavorite,
  deleteFavorite,
  userMovies,
  deleteMovie,
} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const {
    userMovieId,
    _id,
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
  } = props;
  // const { userMovieId } = props.userMovieId.data;
  // console.log(`Las Pross: ${props}`);

  const handleSetFavorite = () => {
    // props.setFavorite({ id, cover, title, year, contentRating, duration });
    props.userMovies({
      userMovieId,
      _id,
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
    // props.userMovies();
  };

  const handleDeleteFavorite = (userMovieId) => {
    // console.log(`itemId- ${userMovieId}`);
    props.deleteMovie(id, userMovieId);
    // props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item' key={_id}>
      <img className='carousel-item__img' src={cover} alt={title} />

      <div className='carousel-item__details'>
        <div>
          <Link key={id} to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Delete Icon'
              onClick={() => handleDeleteFavorite(userMovieId)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  userMovies,
  deleteMovie,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
