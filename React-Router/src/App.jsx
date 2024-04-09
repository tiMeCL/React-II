import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
      
   <Navbar />
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contacto' element={<Contacto />}/>
      <Route path='*' element={<NotFound />}/>
     
   </Routes>
   
  
    
    </>
  
  )
}

export default App