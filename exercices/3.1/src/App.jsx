import { useState, useEffect } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';
import Loading from './components/Loading';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timer when component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positivePercentage = total ? (good / total) * 100 : 0;

  // If loading is true, show Loading component
  if (loading) {
    return <Loading />;
  }

  // After loading is done, show the feedback form and statistics
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
