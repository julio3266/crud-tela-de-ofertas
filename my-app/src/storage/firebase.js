import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxIBVbReS9nnmvjN5eMjYHyovO2aws_Yw",
    authDomain: "crud-ofertas-react-boostrap.firebaseapp.com",
    databaseURL: "https://crud-ofertas-react-boostrap.firebaseio.com",
    projectId: "crud-ofertas-react-boostrap",
    storageBucket: "crud-ofertas-react-boostrap.appspot.com",
    messagingSenderId: "686095166104",
    appId: "1:686095166104:web:861992d5abb94c0f2ebeed"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
