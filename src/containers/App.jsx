import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hoja from "../pages/Hoja";

function App() {
  return ( 
    <BrowserRouter>
    <Routes>

      <Route path="CV-RE" element={ <Hoja/>}/>
    
    </Routes>
  </BrowserRouter>
   );
}

export default App;