import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LandingPage from './pages/UserPages/LandingPage/LandingPage'
import UserLogin from './pages/UserPages/LoginPage/LoginPage'
import UserSignup from './pages/UserPages/UserSignup'
import AdminHome from './pages/AdminPages/AdminHome'
import AdminLogin from './pages/AdminPages/AdminLoginPage/AdminLogin'
import AdminUserDetails from './pages/AdminPages/AdminUserDetails'
import AdminPackages from './pages/AdminPages/AdminPackages'
import AdminAddPackages from './pages/AdminPages/AdminAddPackages'
import FeedPage from './pages/UserPages/FeedPage/FeedPage'
import PackageMoreDetails from './pages/UserPages/PackageMoreDetails/PackageMoreDetails'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/signup' element={<UserSignup/>} />
          <Route path='/feed' element={<FeedPage/>} />
          <Route path='/viewDetails' element={<PackageMoreDetails/>} />


          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/adminHome' element={<AdminHome/>} />
          <Route path='/adminUserDetails' element={<AdminUserDetails/>} />
          <Route path='/adminUserDetails' element={<AdminUserDetails/>} />
          <Route path='/adminPackagesDetails' element={<AdminPackages/>} />
          <Route path='/adminAddPackage' element={<AdminAddPackages/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App