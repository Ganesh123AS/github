import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./homepage/homepage";
import RegisterForm from './register/register';
function App() {
  return (
    <Routes>
      <Route exact path='/' element= { <Homepage /> } />
      <Route exact path='/register' element= { <RegisterForm /> } />
    </Routes>
  );
}

export default App;
