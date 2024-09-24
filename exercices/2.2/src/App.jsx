import ColorBox from './components/ColorBox';
import './App.css'

function App() {  

  return (
    <div className="App">
      <h1>Color Changing Boxes</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </div>
  );
}

export default App
