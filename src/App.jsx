import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Startpage from './pages/Startpage';

const App = () => {
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Startpage/>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detay/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
