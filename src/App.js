import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import FoodReport from './components/FoodReport';
import SerachFood from './components/SerachFood';
import Food from './components/Food';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
        <h1>FOOD APP</h1>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/nav" element={<Nav/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
  
  <Route path="/food" element={<Food/>}>

  <Route path="AddFood" element={<AddFood/>}/>
  <Route path="DeleteFood" element={<DeleteFood/>}/>
  <Route path="ViewFood" element={<FoodReport/>}/>
  <Route path="UpdateFood" element={<UpdateFood/>}/>
  <Route path="SearchFood" element={<SerachFood/>}/>
  </Route>


  </Routes>
    </div>
  );
}

export default App;
