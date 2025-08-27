import Movie from './Movie'
import { useState } from 'react';

function MoviesList() {
// collection of objects representing movies
const movies = [
{
id: 1.,
title: "The Shawshank Redemption",
year: 1994,
synopsis: "Two imprisoned men find redemption.",
},
{
id: 2.,
title: "The Dark Knight",
year: 2008,
synopsis: "Batman fights the menace known as the Joker.",
},
{
id: 3.,
title: "Interstellar",
year: 2014,
synopsis: "Explorers travel through a wormhole in space.",
},
];


// const movieItems = movies.map(movie => (
// <li>key={movie.id}{movie.title}</li>
// ))

// return (
// <div className="MoviesList componentBox">
// <ul> {/* iterate over each movie, print the title in a list
// */}
// { movies.map(movie => (
// <li>{movie.title}</li>
// )) }
// </ul>
// </div>
// )
// }

const [currentMovies, setCurrentMovies] =
useState(movies);


const movieItems = currentmovies.map(movie => (
<Movie
key={movie.id} // key prop is required for lists
title={movie.title}
year={movie.year}
synopsis={movie.synopsis}/>

)
);

const handleReverseMovies = () => {
// first clone the original, so we don’t mutate it
let newMovies = [...currentMovies];
newMovies.reverse(); // 2. modify the clone
setCurrentMovies(newMovies); // 3. set updated clone in state
}

// add a new item to an array or object - RIGHT WAY using spread to clone original then adding in new item
// let newMovies = [...currentMovies, {
// id: 4, title: "The Whale", year: 2022,
// synopsis: "A morbidly obese teacher attempts to reconnect with his daughter.",
// }]

// const handleAddMovie = () => {
//    const newMovie = {
//       id: newMovies.length + 1,
//       title: "New Movie",
//       year: new Date().getFullYear(),
//       synopsis: "This is a new movie synopsis.",
//    };
//    setCurrentMovies([...newMovies, newMovie]);
// }


function AddMovieForm({onAddMovie}) {
const [title, setTitle] = useState('')
const [year, setYear] = useState('')
// ++ add support for the synopsis field as well, here and below

const handleSubmit = (e) => {
//e.preventDefault();
//onAddMovie({title, year})
}
return (
   <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
         <label>Movie Title:
            <input name="title" value={title}
               onChange={(e) => setTitle(e.target.value)} />
         </label>
         <label>Year Released:
            <input name="year" type="number" value={year}
               onChange={(e) => setYear(e.target.value)} />
         </label>
         <button>Add Movie</button>
      </form>
   </div>
   )
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
   newMovie.id = currentMovies.length + 1; // unreliable but succinct
   setCurrentMovies([...currentMovies, newMovie])
}

const handleDeleteLast = () => {
   if (!currentMovies.length ) return; //no movies to delete
      setCurrentMovies (currentMovies.slice(0, -1)); 
   //slice returns a new array without the last element
}



return (

<div className="MoviesList">
<ul>{ movieItems }</ul>
<button onClick={handleReverseMovies}>Reverse </button>
<button onClick={handleAddMovie}>Add </button>
<button onClick={handleDeleteLast}>Delete</button>
<AddMovieForm onAddMovie={handleAddMovie}/>
</div>)


}

export default MoviesList;