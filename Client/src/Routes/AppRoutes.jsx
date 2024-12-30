import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';

function AppRoutes() {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
      </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
