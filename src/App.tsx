'use strict'

import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Todo list</span>
      <TaskInput />
    </div>
  );
}

export default App;
