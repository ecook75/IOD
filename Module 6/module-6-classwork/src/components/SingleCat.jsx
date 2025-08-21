//Exercise 2

// separate component for displaying each movie

import React from 'react';

function SingleCat({ name, latinName, BigCatURL }) {
  return (
    <li>
      <h3>{name}</h3>
      <img src= {BigCatURL} width= "300px" />
      <div>{latinName}</div>
    </li>
  );
}

export default SingleCat;


