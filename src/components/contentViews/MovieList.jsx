import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

const MovieList = (props) => {
    const movies = props.movies.map((movie) => {
        return <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster_image_thumbnail}
            title={movie.title}
            onSelect={props.onSelect}
        />;
    });



    const moviesFoundCount = () => {
        if (movies.length) {
            return (
                <h3>Found {movies.length} item{movies.length === 1 ? '' : 's'}</h3>
            )
        }
    };

    const startSearch = () => {
        if (!movies.length) {
            return (
                <div style={{textAlign: 'center'}}>
                    <img
                        src="/img/seat.svg"
                        className="startImage"
                        alt="Search a city to look for movies"
                    />
                    <h2 style={{fontSize: '1.5rem'}}>
                        Select a city and reserve
                        <span className='gradientText'>a seat today :)</span>
                    </h2>
                </div>
            )
        }
    };

    return (
        <div>
            {moviesFoundCount()}
            {startSearch()}
            {movies}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array,
    onSelect: PropTypes.func
};

export default MovieList;
