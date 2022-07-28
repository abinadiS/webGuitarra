
import Curso from "./components/cursoguitar";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nosotros from "./components/pages/nosotros";

const App =()=> {

  return (
    <BrowserRouter>
    <Header></Header>

    <Routes>
    <Route path="/" element={[<Main/>, <Curso/>]}/>
    <Route path="/nosotros" element={<Nosotros/>}/>
    </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App;
