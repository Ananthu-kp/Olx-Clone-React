import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route exact path='/' element={<Home />}/>

          <Route path='/signup' element={<Signup />}/>

          <Route path='/login' element={<LoginPage />}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
