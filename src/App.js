import React from 'react';
import Navibar from './features/navibar';
import './App.css';
import QuestionPage from './features/question';

function App() {
  return (
    <div className="App">
      <Navibar />
      <QuestionPage />
    </div>
  );
}

export default App;
