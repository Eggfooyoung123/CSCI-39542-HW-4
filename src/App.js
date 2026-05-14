import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // Requirement 2: State management for 3 categories
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  // Requirement 4: Event handler functions in the parent
  const handleWinClick = () => {
    setWins(wins + 1);
  };

  const handleLossClick = () => {
    setLosses(losses + 1);
  };

  const handleDrawClick = () => {
    setDraws(draws + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Poker Session Tracker</h1>
      
      {/* Requirement 4: Passing event handlers and text to children */}
      <Button handleClick={handleWinClick} text="Win" />
      <Button handleClick={handleLossClick} text="Loss" />
      <Button handleClick={handleDrawClick} text="Draw" />

      {/* Requirement 3: Passing state values down as props */}
      <Statistics 
        winCount={wins} 
        lossCount={losses} 
        drawCount={draws} 
      />
    </div>
  );
};

export default App;