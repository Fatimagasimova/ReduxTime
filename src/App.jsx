import { Routes, Route, Link,NavLink } from 'react-router-dom';
import Stopwatch from './Components/Stopwatch';
import Timer from './components/Timer';
import Clock from './components/Clock';
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
        <Route path="*" element={<Stopwatch />} /> {/* default */}
      </Routes>
    </div>
  );
}

export default App;