import React from 'react';

import SignUp from './components/sign-up';
import SignIn from './components/sign-in';

var signIn = [
  {
    type: 'text',
    name: 'username'
  },
  {
    type: 'password',
    name: 'password'
  }
];

var signUp = [
  {
    type: 'text',
    name: 'name'
  },
  {
    type: 'text',
    name: 'username'
  },
  {
    type: 'password',
    name: 'password'
  }
]

function App() {
  return (
    <div>
      <h3>SignUp</h3>
      <SignUp field={signUp} />
      <br />
      <br />
      <h3>SignIn</h3>
      <SignIn field={signIn} />
    </div>
  );
}


export default App;