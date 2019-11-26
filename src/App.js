import React from 'react';
import './App.css';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {


  return ( 
    <ErrorBoundary >
      <div > WOWOdiv </div> 
      <User / >
    </ErrorBoundary>
  );
}

export default App;