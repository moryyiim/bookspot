import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './pages/home/Home';
import About from './pages/about/About';
import BookList from './components/booklist/BookList';
import BookDetails from './components/bookdetails/BookDetails';
import { AppProvider } from './components/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />} />
      </Routes>
    </Router>
  </AppProvider>
);
