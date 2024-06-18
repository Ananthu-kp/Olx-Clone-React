import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Signup from './Pages/Signup'
import LoginPage from './Pages/LoginPage'

import {userContext} from './Store/userContext'
import {FirebaseContext} from './Store/FirebaseContext'
import { getAuth } from "firebase/auth";
import View from './Components/View'
import Create from './Components/Create'

function App() {
  const { setUser } = useContext(userContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const authentication = getAuth(firebase);
    authentication.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path='/' element={<Home />}/>

          <Route path='/signup' element={<Signup />}/>

          <Route path='/login' element={<LoginPage />}/>

          <Route path='/create' element={<Create/>}/>

          <Route path='/view-post' element={<View/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
