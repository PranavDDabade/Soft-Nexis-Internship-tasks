
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetails';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<ProductList/>}/>
          <Route path='/add' element = {<AddProduct/>}/>
          <Route path='/edit/:id' element = {<ProductDetail/>}/>
          <Route path='/products' element = {<ProductList/>}/>
          <Route path='/products/:id' element = {<ProductDetail/>}/>
        </Routes>
      </Router>
  );
}

export default App;
