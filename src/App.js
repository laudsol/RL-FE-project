import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LatestArticles from './Components/LatestArticles';
import StarredArticles from './Components/StarredArticles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";


function App() {
  const isDarkMode = useSelector(state => state.reducers.isDarkMode);
  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<LatestArticles/>}/>
          <Route path='/latest' element={<LatestArticles/>}/>
          <Route path='/starred' element={<StarredArticles/>}/>
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
