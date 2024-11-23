import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './components/pages/Home'
import ListProduct from './components/pages/ListProduct'
import RegisterProduct from './components/pages/RegisterProduct'
import NavBar from './components/layout/NavBar'
import Container from "./components/layout/Container"
// import AvaliarProduto from './components/pages/AvaliarProduto'
import DetalheList from './components/listproduct.cards/DetalheList.jsx'
import Delete from "./components/listproduct.cards/Delete.jsx"

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
        {/* <Route path='/avaliarProduto' element =  {<AvaliarProduto/>}/> */}
        <Route path="detalheList/:cod_cadastro_avalia" element={<DetalheList/>} />
        <Route path="delete/:cod_cadastro_avalia" element={<Delete/>}/>
        </Route>
      </Routes>
    </Container>
  </BrowserRouter>
</>
  )
}

export default App
