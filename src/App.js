import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adduser from './components/Adduser';
import Searchuser from './components/Searchuser';
import Deleteuser from './components/Deleteuser';
import Viewuser from './components/Viewuser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Adduser/>}/>
      <Route path='/s' element={<Searchuser/>}/>
      <Route path='/d' element={<Deleteuser/>}/>
      <Route path='/v' element={<Viewuser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
