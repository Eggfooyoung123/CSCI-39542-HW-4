import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  // We calculate the total here every time the component renders
  const total = props.winCount + props.lossCount + props.drawCount;

  // Requirement 5: Conditional rendering
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No data collected yet</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      {/* We pass the values down as props again */}
      <StatisticLine text="Wins" value={props.winCount} />
      <StatisticLine text="Losses" value={props.lossCount} />
      <StatisticLine text="Draws" value={props.drawCount} />
      <StatisticLine text="Total Hands" value={total} />
    </div>
  );
};

export default Statistics;