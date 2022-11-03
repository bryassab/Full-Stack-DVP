import './App.css';
import Users from './visual/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './visual/User';
import Error from './visual/Error';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/User' element={<User />} />
          <Route path='/Error' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
