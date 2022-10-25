import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, onSnapshot, query, QuerySnapshot, setDoc, where } from "firebase/firestore";

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

export const getAllOpenedChats = (userId: string, setChat: any) => {
  let chats: Array<any>[]
  const setQuery = query(
    collection(db, 'users'),
      where('id', '==', userId)
  )

  const onsubscribe = onSnapshot(setQuery, (querySnapshot) => {
    querySnapshot.forEach(doc => {
      const data = doc.data()

      chats.push(...data.chats)
    })
    setChat(chats)
  })
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)