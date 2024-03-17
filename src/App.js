import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Authpage from './pages/AuthPage/Authpage';
import Tournament from './pages/Tournament/Tournament';
import CreatePost from './pages/CreatePost/CreatePost';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <>
    <Routes>
				<Route path='/' element={<Homepage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/profile" element={<Profile/>} />
				<Route path='/auth' element={<Authpage />} />
			</Routes>
    </>
  );
}

export default App;
