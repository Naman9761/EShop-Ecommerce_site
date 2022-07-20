import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
 import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import ContactForm from './components/ContactForm';
import About from './components/About';


function App() {
  return (
  <>
   <Header />
   <Routes>

     <Route path='/' element={<Cards />} />
     <Route path='/about' element={<About/>} />
     <Route path='/contactform' element={<ContactForm/>} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>

  </>
  );
}

export default App;