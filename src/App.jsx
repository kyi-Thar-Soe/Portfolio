import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/Defaultlayout';
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='details/:id' element={<DetailPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
