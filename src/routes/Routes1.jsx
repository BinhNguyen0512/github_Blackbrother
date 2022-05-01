import {Routes, Route} from 'react-router-dom'

import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'


const Routes1 = () => {

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/catalog/:slug' element={<Product/>} />
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default Routes1