import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Kontak" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <h1 className="text-3xl font-bold underline bg-red-100">Hello world!</h1>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;