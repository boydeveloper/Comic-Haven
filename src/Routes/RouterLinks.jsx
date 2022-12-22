import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Product, Checkout, Event, Error404 } from '../Pages/index';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function RouterLinks() {
  return (
    <Router>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '0.2rem solid #fff',
            fontFamily: 'inherit',
            backgroundColor: '#010a12',
            color: '#708d81',
          },
        }}
      />
      <Navigation />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/:product/:id" element={<Product />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterLinks;
