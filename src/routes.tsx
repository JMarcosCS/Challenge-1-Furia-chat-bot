import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';  

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </Router>
);

export default AppRoutes;
