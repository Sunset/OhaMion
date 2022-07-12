import React, {useState} from 'react';
import './App.css';


function App() {

  const[count,setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {count}
        </p>
          Oha Mion~!
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </header>

    </div>
  );
}

export default App;
