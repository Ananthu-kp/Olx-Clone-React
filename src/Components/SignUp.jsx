import React, { useState, useContext } from 'react'

import Logo from '../../olx-logo.png'
import { FirebaseContext } from '../Store/FirebaseContext';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    const auth = getAuth(firebase);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      const database = getFirestore(firebase);
      const userData = {
        id: user.uid,
        username: username,
        email: email,
        phone: phone,
      };
      
      await setDoc(doc(database, "users", user.uid), userData);

      toast.success("User registered successfully!");
  
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      toast.error("Error creating user");
      console.log("Error creating user : ", error);
    }
  };
  



  return (
    <div>
      <div className="signupParentDiv">
        <img className='logo' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <div className='alreadyAccount'>
          <p>
            <Link to={'/login'}>Already have an account</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default SignUp
