import React from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am Clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
