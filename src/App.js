import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Basket from './pages/Basket';

function App() {
  return (
    <BrowserRouter>

      <Routes>
           
           <Route path='/' element = {<Layout/>}>
             <Route index element = {<Home/>}/>
             <Route path='basket' element = {<Basket/>} />
           </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
