import { useState } from 'react';

function ClickCounter({ title, message }) {
  const [count, setCount] = useState(0);
  const [hoverMessage, setHoverMessage] = useState('');

  return (
    <>
      <h1>{title}</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => setHoverMessage('Please click on me now!')}
        onMouseLeave={() => setHoverMessage('')}
      >
        count is {count}
        {count >= 10 && <p>{message}</p>}
      </button>
      {hoverMessage && <p>{hoverMessage}</p>}
    </>
  );
}

export default ClickCounter;
