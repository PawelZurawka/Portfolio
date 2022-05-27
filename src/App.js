import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

export const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};
