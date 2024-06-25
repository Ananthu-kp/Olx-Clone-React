import React, { useState, useContext } from 'react';

import {FirebaseContext} from '../Store/FirebaseContext'
import Logo from '../../olx-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
      toast.error('Email is Required', { autoClose: 1500 })
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid Email Format', { autoClose: 1500 })
    } else if (password.length === 0) {
      toast.error('Password is Required', { autoClose:1500 })
    } else if (password.length < 6) {
      toast.error('Password must be 6 character', {autoClose: 1500 })
    } else {

    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      toast.success('Login Successfull')
      const user = result.user;

      setTimeout(()=> {
        navigate('/')
      }, 1000)
    })
    .catch((err) => {
      if (err.code === 'auth/invalid-credential') {
        toast.error('Invalid credentials');
      } else {
        toast.error('Login failed');
      }
      console.error('Error login', err);
    });
  }
}

  return (
    <div>
      <div className="loginParentDiv">
        <img className='logo' src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <p>
          <Link to={'/signup'}>Don't have Account</Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
