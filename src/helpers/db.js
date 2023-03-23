import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD36U8qnRlcdSAEndxrMU02wjXJe4amKLc',
  authDomain: 'authentication-example-b9652.firebaseapp.com',
  projectId: 'authentication-example-b9652',
  storageBucket: 'authentication-example-b9652.appspot.com',
  messagingSenderId: '453957966237',
  appId: '1:453957966237:web:2dd9d2efe319ac261bb774',
  measurementId: 'G-QFJXLMGDL0'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
