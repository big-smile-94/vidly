import { Route, Routes, Navigate } from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import NavBar from './components/common/navBarx';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/movies/:id" index element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
