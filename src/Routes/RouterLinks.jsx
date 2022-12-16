import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Product, Checkout, News } from '../Pages/index';
import Navbar from '../components/Navigation/Route/Navbar/Navbar';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:product/:id" element={<Product />} />
        <Route path="/events/:id" element={<News />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterLinks;
