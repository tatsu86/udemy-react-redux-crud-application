import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const profiles = [
    {name: "Tatsuki", age: 23},
    {name: "Kei", age: 22},
    {name: "Nana" }
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}!, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
