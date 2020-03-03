import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBbDtb21py14U5E22xopCHrVwy5dCODOU4",
  authDomain: "ofertas-c85a2.firebaseapp.com",
  databaseURL: "https://ofertas-c85a2.firebaseio.com",
  projectId: "ofertas-c85a2",
  storageBucket: "ofertas-c85a2.appspot.com",
  messagingSenderId: "908613832835",
  appId: "1:908613832835:web:84adcf296877792c90cbb6"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);