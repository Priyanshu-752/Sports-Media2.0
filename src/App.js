import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Authpage from './pages/AuthPage/Authpage';

function App() {
  return (
    <>
    <Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/auth' element={<Authpage />} />

			</Routes>
    </>
  );
}

export default App;
