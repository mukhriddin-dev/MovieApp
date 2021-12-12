import React from 'react';
import Film from './Film';
import Error from "./Error";
import Search from './Search';
function Films(props) {
  console.log(props)
const {movie=[]}=props;
  console.log(movie.length)
  return (
    <div className='films'>
      {movie.length ? movie.map(mov=><Film mov={mov} key={mov.imdbID} />) : <Error/>}
    </div>
  );
}

export default Films;