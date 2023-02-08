import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
        <BrowserRouter>

          <Navbar/>

            <Routes>
              
              <Route path='/' element={<ItemListContainer/>}/>     
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/> 

            </Routes>
          
        </BrowserRouter>
           
    </>
  )
}

export default App;
