import React from 'react';
import './App.css';
import GraphPlot from './GraphPlot';
import './GraphPlot.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Graph Plotting App</h1>
      </header>
      <main>
        <GraphPlot />
      </main>
    </div>
  );
}

export default App;