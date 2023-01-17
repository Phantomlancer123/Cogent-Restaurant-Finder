import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import {
  HomePage,
  DetailPage,
} from './pages';

import { lightTheme } from './styles';

import { PATH } from './constants';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />}> </Route>
          <Route path={PATH.DETAIL} element={<DetailPage />}> </Route>
          <Route path="*" element={<Navigate to={PATH.HOME} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
