import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'
import Pet from './components/Pet'
import Greeting from './components/Greeting'
import FullName from './components/FullName'
import ComplexComment from './components/ComplexComment'
import Comment from './components/Comment'
import { FancyBox, Callout } from './components/FancyBox'
import MoviesList from './components/MoviesList'
import MoodChanger from './components/MoodChanger'
import LoginForm from './components/LoginForm'
import ExplodingBomb from './components/ExplodingBomb'
import Clock from './components/Clock'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import WeatherAPIProxy from './components/WeatherAPI'
import RefCounter from './components/RefCounter'
import VideoPlayer from './components/VideoPlayer'
import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'
import ActivityFinder2 from './components/ActivityFinder2'
import { UserProvider } from './components/context/UserContext'
import BitcoinRates from './components/BitcoinRates'
//Exercise 3


//import EmojiChanger from './components/Emoji'


//Exercises 2, 4 and 5

import BigCats from './components/BigCats'

import BirthdayTranslator from './components/BirthdayTranslator'
import Weather from './components/Weather'
import ReducerCounter from './components/ReducerCounter'
// function ExampleComponent() {
// return (
// <div className="ExampleComponent componentBox">
// <h1>My Example Component</h1>
// <p>My first React component!</p>
// <a href="https://react.dev" target="_blank">
// <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// )
// }

// function Welcome(props) { // custom Welcome component
// return (
// <div className="Welcome">
// {/* if the 'name' prop exists, render it on the screen */}
// <h3>Welcome {props.name}!</h3>
// {/* if this component has children, render them here */}
// {props.children}
// </div>
// )
// }

//import './App.css'  at the top of App.jsx
// componentBox class styles a component into a box
// Welcome class identifies this component
// function Welcome(props) {
// return (
// <div className="componentBox">
// <h3>Welcome {props.name}!</h3>
// <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3> {/* style object directly in JSX */}
// </div>
// )
// }

// object storing comment data - passed as props
const comment = {
date: new Date(),
text: 'I hope you enjoy learning React!',
author: { //}
name: 'Hello Kitty',
avatarUrl: 'https://placecats.com/g/64/64',
},
};

const author = {
name: 'Hello Kitty',
avatarUrl: 'https://placecats.com/g/64/64',
}




function App() {
  const [count, setCount] = useState(0)



// const spiderman = { 
//   name: 'Spiderman', 
//   alterEgo: 'Peter Parker', 
//   catchPhrase: 'With great power comes great responsibility' 
// };


// const spideyJSX = (<div>
// <h3>{spiderman.name}</h3>
// <blockquote>{spiderman.catchPhrase}</blockquote>
// <cite>{spiderman.alterEgo}</cite>
// </div>);

    
// return (
//   <div>
// <Greeting message="Hello World" />
// <Greeting message="Hello World" >
//   <div>SINCERELY</div>
// <div><strong>Location</strong> New Zealand</div>
// </Greeting>




//   </div>

// );
// }

// export default App






    // <div className="App">{spideyJSX}</div>
      //  <ExampleComponent/>
      //  <Welcome name="students">
      //  </Welcome>
      // <PropsDisplayer />
      // <PropsDisplayer myProp="first prop"/>
      // <PropsDisplayer prop1="first" prop2="second" prop3={3}/>
      // <PropsDisplayer name="Harry Styles" age={29} height={5}/>
        // <City name="sydney" />
        // <City name="Melbourne" state="VIC" />
        // <City name="Chicago" state="Illinois" country="USA" />
//         <City name="Newcastle">
// {/* <div>Newcastle is a harbour city in the Australian state of New South
// Wales.</div>
// <div><strong>Population:</strong> 322,278 (2016)</div> */}
// <p>hi</p>
// </City>
//<Pet type="dog" name="Rex" colour="brown" />
//<FullName first="Kendrick" last="Lamar" />
// <ComplexComment author={comment.author}
//date={comment.date}
//text={comment.text}/> 
//Complex<Comment author={comment.author} date={comment.data} text={comment.text}/>
//<Comment author={author} text="random text" date={new Date()} />
// {/* <Callout title="Nested React Component"
// message="Simple message with a fancy box applied via composition">
// <FullName first="Elon" last="Musk" />
// </Callout> */}
//<MoviesList/>
//<MoodChanger/>

//Exercise 2, 4 and 5
//<BigCats/>

//<BirthdayTranslator/>
//<Weather/>
//<LoginForm/>
//Exercise 3
//<EmojiChanger/>
//<ErrorBoundary/>
//<ExplodingBomb/>
//<Clock/>
//<ClockDisplay />
//<ActivityFinder/>
//<WeatherAPIProxy/>
//<RefCounter />
//<VideoPlayer/>
//<ReducerCounter/>
//<PostListReducer/>
//<SubscribeForm/>
return (
//   <UserProvider>
//     <ActivityFinder2/>
// </UserProvider>
<BitcoinRates/>
);
}




export default App;