import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="movie" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
