
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup'




function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
    </Routes>
  );
}

export default App;
