import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Product, Error } from '../Pages/index';
import Navbar from '../components/Navigation/Route/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function RouterLinks() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic:id" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterLinks;
