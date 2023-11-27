import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Component/Home';
import Post from './Component/Post';
import Testfile from './Component/Testfile';
import Accountlogin from './Component/Accountlogin';
import Profile from './Component/Profile';
import Commentbox from './Additonlalcom/Commentbox';
import Notification from './Component/Notification';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Home />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Accountlogin' element={<Accountlogin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Notification' element={<Notification/>} />


        </Routes>
      </BrowserRouter>
      {/* <Accountlogin/>
      <Testfile/> */}
      {/* <Commentbox/> */}
    </div>
  );
}

export default App;
