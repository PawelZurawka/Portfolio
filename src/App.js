import { Home } from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

export const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};
