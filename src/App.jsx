import Heading from './assets/component/heading/Heading.jsx'
import Content from './assets/component/content/Content.jsx'
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom'
import Home from './assets/component/home/Home.jsx'
import Products from './assets/component/products/Products.jsx'
import Shirt from './assets/component/products/Shirt.jsx'


function App() {
  //useLocation
  //useParams
  //useNavigate

  let location = useLocation()
  let params = useParams()
  let navigate = useNavigate()

  // console.log(location.pathname);
  console.log(params);
  console.log();


  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />}>
          <Route path='product' element={<Products />} />
          <Route path='buy-1-get-1' element={<div>Buy1Get1</div>} />
          <Route path='sale-up-to-75%' element={<div>Sale 75%</div>} />
          <Route path='address' element={<div>Address</div>} />
          <Route path='policies' element={<div>Policy</div>} />
        </Route>
        <Route>
          <Route path='/product/:id' element={<Shirt />} />
        </Route>
      </Routes >
    </div>
  )
}

export default App
