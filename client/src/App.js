
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import UserHome from './components/userhome/UserHome';
import AdminLogin from './components/admin-login/admin-login';
import AdminHome from './components/AdminHome/AdminHome';
// admin sub pages
import ApplicationList from './pages/Application-list/Applist';
import RecordTrack from './pages/RecordTrack/RecordTrack';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/home'





function App() {

  // useEffect
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminStatus");
  return (
    <Routes>
      {user && <Route path="/" exact element={<UserHome />} />}
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/" element={<Navigate replace to="/login" />} />

      {/* admin routes */}
      <Route path="/admin-login" exact element={<AdminLogin />} />
      {admin &&
        <Route path="/admin" exact element={<AdminHome />} >

          <Route path="/admin" exact element={<Home />} />
          <Route path="/admin/applications" exact element={<ApplicationList />} />
          <Route path="/admin/record-track" exact element={<RecordTrack />} />
          <Route path="/admin/booking" exact element={<Booking />} />
        </Route>

      }



      <Route path="/admin" element={<Navigate replace to="/admin-login" />} />



    </Routes>
  );
}

export default App;
