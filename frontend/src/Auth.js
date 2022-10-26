import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC6qijzJ1FLGuDBCeDue_KycJvISHSE0uU',
  authDomain: 'sad-auth-9a168.firebaseapp.com',
  projectId: 'sad-auth-9a168',
  storageBucket: 'sad-auth-9a168.appspot.com',
  messagingSenderId: '1066186387333',
  appId: '1:1066186387333:web:88e2c4a9cea1c04dc71eec',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const photo = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('photo', photo);
    })
    .catch((error) => {
      console.log(error);
    });
};
