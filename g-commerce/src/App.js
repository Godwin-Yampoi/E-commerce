import  Shop  from './Pages/Shop';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path = "/" element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category="men"/>}/>
            <Route path='/womens' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory category="kid"/>}/>
            <Route path = "/product" element={<Products/>}>
            <Route path = ":productId" element={<Products/>}/>
            </Route>
            <Route path = "/cart" element={<Cart/>}/>
            <Route path = "/login" element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
