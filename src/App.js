import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ContactFormPage } from './pages/ContactFormPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/send"
          element={<ContactFormPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
