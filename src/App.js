import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchList from './components/WatchList';
import Watched from './components/Watched';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
