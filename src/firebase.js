import firebase from "firebase";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0P83lTg98CH7J28o3PYv25vROnnxrBVo",
    authDomain: "discord-clone-842cf.firebaseapp.com",
    projectId: "discord-clone-842cf",
    storageBucket: "discord-clone-842cf.appspot.com",
    messagingSenderId: "345352783206",
    appId: "1:345352783206:web:60726aba687a86091334a7",
    measurementId: "G-P8K4PK6R32"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;