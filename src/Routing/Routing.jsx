import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Cart from '../Cart';
import RestaurantMenu from '../Body/RestaurantMenu';

const Routing = () => {

    return (
        
        <div className='Routing'>

            <div className="nav-items">
                <BrowserRouter>
                <Routes>
                    <Route path='/' element= {<Home/>}/>
                    <Route path='/about' element = {<About/>}/>
                    <Route path='/contact' element= {<Contact/>}/>
                    <Route path='/cart' element ={<Cart/>}/>
                    <Route path='/restaurant/:resId'   element={<RestaurantMenu/>}/>
                </Routes>
                
                </BrowserRouter>
            </div>
        </div>
    );
};

export default Routing;
