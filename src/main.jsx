import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FirebaseContext } from './Store/FirebaseContext.jsx'
import firebase from './firebase/config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{firebase}}>
    <App />
  </FirebaseContext.Provider>
)
