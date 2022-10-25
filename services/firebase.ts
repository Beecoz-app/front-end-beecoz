import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArxYAoLzlOWogTgEaq3tXOTcHAzybFs-E",
  authDomain: "beecoz-9c997.firebaseapp.com",
  projectId: "beecoz-9c997",
  storageBucket: "beecoz-9c997.appspot.com",
  messagingSenderId: "164035433752",
  appId: "1:164035433752:web:7a2258720e792ca06a3a6d"
};

export const addUser = async (sender: {id: number, email: string, avatar: string, type: string}) => {
    await setDoc(doc(db, 'users', sender.email), {
        id: sender.id,
        name: sender.email,
        type: sender.type,
        avatar: sender.avatar
    })
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)