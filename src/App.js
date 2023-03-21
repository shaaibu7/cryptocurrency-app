import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptos } from './redux/HomeSlice/CryptoSlice';
import Homepage from './component/Homepage';
import Detailpage from './component/Detailspage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="details/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
