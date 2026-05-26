import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/chantilly" element={<Restaurant location="chantilly" />} />
        <Route path="/falls-church" element={<Restaurant location="falls-church" />} />
        <Route path="*" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App
