import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './auth/RequireAuth';
import MainLayout from './components/layouts/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Protected routes */}
        <Route path="/" element={<RequireAuth />}>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
