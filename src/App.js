import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Read/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
