//Exercise 1

function Greeting(props) {
  console.log(props)
  return (
    <div className="Greeting componentBox">
      {/* <h2>Hello World</h2> */}
      {/* <h2>{props.message}</h2>
      <h2>{props.name}</h2> */}
      {props.name ? <p>Hello: {props.name}</p> :  <p>Hello: world</p> }
      {props.children}
    </div>

  );
}
export default Greeting;