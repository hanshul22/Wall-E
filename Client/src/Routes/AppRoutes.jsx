import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../Screens/Login';
import { Register } from '../Screens/Register';

function AppRoutes() {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" exact element={<div>Home</div>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
      </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
