import { Routes, Route, Link,NavLink } from 'react-router-dom';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import Clock from './Components/Clock';
import "./App.css"

function App() {
  return (
    <div className="app" style={{ textAlign: 'center', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/clock">Fulltime</NavLink>
        <NavLink to="/stopwatch">Stopwatcher</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      </nav>

      <Routes>
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </div>
  );
}

export default App;