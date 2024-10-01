import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)} %`} />
      </tbody>
    </table>
  );
};

export default Statistics;
