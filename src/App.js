import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Authpage from './pages/AuthPage/Login';
import Tournament from './pages/Tournament/Tournament';
import CreatePost from './pages/CreatePost/CreatePost';
import Profile from './pages/Profile/Profile';
import Register from './pages/AuthPage/Register';
import Login from './pages/AuthPage/Login';
function App() {
  return (
    <>
    <Routes>
				<Route path='/' element={<Homepage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/profile" element={<Profile/>} />
				<Route path='/auth' element={<Authpage />} />
        <Route path='/register' element={< Register/>}/>
        <Route path='/login' element={<Login/>}/>
			</Routes>
    </>
  );
}

export default App;
