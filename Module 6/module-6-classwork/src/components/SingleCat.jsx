
//Exercises 2,4,5

// separate component for displaying each movie

import React from 'react';


function SingleCat({id, name, latinName, BigCatURL, Delete }) {
  return (
    <li>
      <h3>{name}</h3>
      <img src= {BigCatURL} width= "300px" />
      <div>{latinName}</div>
      <button onClick={()=>Delete(id)}>Delete</button>
    </li>
  );
}

export default SingleCat;


