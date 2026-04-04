import './App.css'
import Resturant from './pages/Resturant'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router"
import ResturantMenu from './pages/ResturantMenu'
import SearchCard from './components/SearchCard'
import {store} from "./Stores/stores"
import { Provider } from 'react-redux'
import Checkout from './components/Checkout'


function App() {


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/restaurant' element={<Resturant></Resturant>} ></Route>
      <Route path='/city/delhi/:id' element={<ResturantMenu></ResturantMenu>}></Route>
      <Route path='/city/delhi/:id/search' element={<SearchCard></SearchCard>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
    </Routes>

    </BrowserRouter>
    </Provider>
  )
}

export default App
