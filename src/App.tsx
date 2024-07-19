import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import ProductDetail from './components/ProductDetail';
import CheckOut from './components/CheckOut';

const App = ()=> {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </>
  )
}

export default App;