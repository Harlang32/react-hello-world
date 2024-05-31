import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
// import DarkMode from './DarkMode';


const App = (props) => {
    
    return (
      <div className="app">
        <Profile/>

        <div className="dark-mode">
        <h1>DarkMode</h1>
        </div>
        <div className="tic-tac-toe">
          <TicTacToe/>
        </div>
        <div className="todo">
          <h1>Todo</h1>
        </div>
      </div>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <App />,
    


    
    
  );