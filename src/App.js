// import React from 'react';
import { Routes, Route } from "react-router-dom";
import{Home} from './Home/Home';
import{Galeria} from './Galeria/Galeria';
import { Landing } from './Landing/Landing';
import { Register } from './Register/Register';
import React, { useState, useEffect } from 'react';
import Paginacion from './components/Paginacion';
import axios from 'axios';
import './App.css';
import CardsView from './components/Cards';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="home" element={<Home />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

const App = () => {
  const [Cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3000');
      setCards(res.data);
      setLoading(false);
    };

    fetchCards();
  }, []);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>GALERIA</h1>
      <CardsView posts={currentCards} loading={loading} /> 
      <Paginacion
        cardsPerPage={cardsPerPage}
        totalcards={12}
        paginate={paginate}
      /> 
      
    </div>
  );
};
export default App;
