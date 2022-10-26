
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTGhqpGn_B7ck7_7uv9hU_3Gf-eJhoUII",
    authDomain: "new-netflix-6e6a8.firebaseapp.com",
    projectId: "new-netflix-6e6a8",
    storageBucket: "new-netflix-6e6a8.appspot.com",
    messagingSenderId: "997036590984",
    appId: "1:997036590984:web:58a04e11dd809f6cbedc3d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(firebaseApp);

export {auth}
export const db = getFirestore(firebaseApp)
