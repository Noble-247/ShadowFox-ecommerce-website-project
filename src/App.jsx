import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import ShopContextProvider from './context/ShopContext';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer /* toast */ } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// TODO : MAKE THE PRIVATE POLICY PAGE A MODAL
// TODO : MAKE THE PRIVATE POLICY PAGE A MODAL

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <div className='px-4 sm:px-[4.5vw] md:px-[5vw] lg:px-[7vw] xl:px-[14vw]'>
          <ToastContainer />
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
            <Route path='orders' element={<Orders />} />
            <Route path='place-order' element={<PlaceOrder />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
