import { useState } from 'react';

function ColorBox() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const nextColor = colors[(currentColorIndex + 1) % colors.length];
  const currentColor = colors[currentColorIndex];

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', padding: '10px', margin: '20px', textAlign: 'center' }}>
      <button onClick={handleClick}>Next color: {nextColor}</button>
      <p>{currentColor}</p>
    </div>
  );
}

export default ColorBox;
