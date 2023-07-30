

import './App.css'
import Home from './Component/Home'
import Navber from './Component/Navber';
import Product from './Component/Product';
import Products from './Component/Products';
import Checkout from './Component/Checkout';
import About from './Component/About';
import Cart from './Component/Cart';
import { Service } from './Component/Services/Service';
import { NavberSearchIconeCart } from './Component/NavberSearchIconCart/NavberSearchIconeCart';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { Route} from 'react-router-dom';


import { Routes   } from 'react-router-dom';
import { Users } from './Users/Users';
import { Admin } from './Admins/Admin';


function App() {

  return (
<>
<div className=''>
  <Navber/>
<NavberSearchIconeCart/>

</div>

<div className='md:bg-gray-50 '>



<Routes >
   <Route exact path="/" element={<Home/>}/>
 <Route exact path="/products" element={<Products/>}/>
 <Route exact  path="/products/:id" element={<Product/>}/>
 <Route exact  path="/cart" element={<Cart/>}/>
 <Route exact  path="/Checkout" element={<Checkout/>}/>
 <Route exact  path="/About" element={<About/>}/>
 <Route exact path="/Service" element ={<Service/>}/>
 <Route exact path='/Users' element={<Users/>}/>
 <Route exact path='/Admin' element={<Admin/>}/>

 <Route exact  path="/contact" element={<Contact/>}/>
 
 
 
</Routes>

 
<Footer/>
</div>

</>
  )
}

export default App
