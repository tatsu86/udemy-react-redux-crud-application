import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const profiles = [
    {name: "Tatsuki", age: 23},
    {name: "Kei", age: 22},
    {name: "", age: 1}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
