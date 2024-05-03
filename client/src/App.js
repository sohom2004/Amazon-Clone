import './App.css';
import Navbar from './components/header/Navbar';
import SecondNav from './components/secondNav/SecondNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import { Routes, Route, Switch } from "react-router-dom";
import SiginIn from './components/signin_signup/SiginIn';
import SignUp from './components/signin_signup/SignUp';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <SecondNav />
          <MainComp />
          <div className='footer_part'>
            <Footer />
          </div>
          </>} 
        />
        <Route path='/product/:id' element={
          <>
          <Navbar />
          <SecondNav />
          <Product />
          <div className='footer_part'>
            <Footer />
          </div>
          </>} 
        />
        <Route path='/cart' element={
          <>
          <Navbar />
          <SecondNav />
          <Cart />
          <div className='footer_part'>
            <Footer />
          </div>
          </>} 
        />
        <Route path='/login' element={<SiginIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;