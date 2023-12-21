import logo from './logo.svg';
import './App.css';
import Stopwatch from "./component/Stopwatch"
import Timer from './component/Timer';
function App() {
  return (
    <div className="App">
        <h1 style={{color:"red"}}>Timer & Stopwatch</h1>
        <div >
        <Stopwatch/>
        <Timer/>
        </div>
    </div>
  );
}

export default App;
