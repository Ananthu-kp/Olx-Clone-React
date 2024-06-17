import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDKRPB4h5FSAef8zl8gU0CHxgTFTTmOSms",
    authDomain: "olxclone-d5385.firebaseapp.com",
    projectId: "olxclone-d5385",
    storageBucket: "olxclone-d5385.appspot.com",
    messagingSenderId: "341298643090",
    appId: "1:341298643090:web:3841356a5489797a8ea64b",
    measurementId: "G-GTP48QLNKW"
  };



export default firebase.initializeApp(firebaseConfig)