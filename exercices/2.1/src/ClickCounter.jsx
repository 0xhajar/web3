import { useState, useEffect } from 'react';

function ClickCounter({ title, message }) {
  const initialCount = JSON.parse(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);
  const [hoverMessage, setHoverMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHoverMessage(true)}
        onMouseLeave={() => setHoverMessage(false)}
      >
        {hoverMessage ? "Click on me" : `count is ${count}`}
        {count >= 10 && <p>{message}</p>}
      </button>
    </>
  );
}

export default ClickCounter;
