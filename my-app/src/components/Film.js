import React from 'react';

function Film({mov}) {
  console.log(mov)
  const {Title,Poster,imdbID,Year,Type}=mov;
  return (
    <div className="card card_add">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={Poster} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right">more_vert</i></span>
      <p>{Type} | {Year}</p>
    </div>
    </div>
  );
}

export default Film;