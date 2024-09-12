import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './components/pages/Home'
import ListProduct from './components/pages/ListProduct'
import RegisterProduct from './components/pages/RegisterProduct'
import NavBar from './components/layout/NavBar'
import Container from "./components/layout/Container"


function App() {
  return (
  <>
    <BrowserRouter>
    <Container>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route path='/' element = {<Home/>}/>
        <Route path='/listProduct' element = {<ListProduct/>}/>
        <Route path='/registerProduct' element = {<RegisterProduct/>}/>  
        </Route>
      </Routes>
    </Container>
  </BrowserRouter>
</>
  )
}

export default App
