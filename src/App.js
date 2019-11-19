import React from 'react';
import './App.css';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {
  // const user ={
  //   id: "aredra",
  //   name: "Are"
  // }

  return (
    <ErrorBoundary>
      <div>WOWOWOW</div>    
      <User   />
    </ErrorBoundary>
  );
}

export default App;
