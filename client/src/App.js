

import { Route, Routes,Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import UserHome from './components/userhome/UserHome';






function App() {
  
 // useEffect
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/" exact element={<UserHome />} />}
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
