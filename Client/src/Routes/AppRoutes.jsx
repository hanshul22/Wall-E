import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" exact element={<div>Home</div>} />
        <Route path="/login" exact element={<div>Login</div>} />
        <Route path="/register" exact element={<div>Register</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default AppRoutes
