import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Shows from './components/Shows';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
       <Header></Header>
       <Routes>
          <Route exact path='/' exact element={<Content />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Shows/>} />
        
       </Routes>
       <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
