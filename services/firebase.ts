import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, onSnapshot, orderBy, query, QuerySnapshot, setDoc, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArxYAoLzlOWogTgEaq3tXOTcHAzybFs-E",
  authDomain: "beecoz-9c997.firebaseapp.com",
  projectId: "beecoz-9c997",
  storageBucket: "beecoz-9c997.appspot.com",
  messagingSenderId: "164035433752",
  appId: "1:164035433752:web:7a2258720e792ca06a3a6d"
};

export const addUser = async (sender: {id: number, name: string, login: string, avatar: string, type: string}) => {
    await setDoc(doc(db, 'users', sender.login), {
        id: sender.id,
        login: sender.login,
        name: sender.name,
        type: sender.type,
        avatar: sender.avatar
    })
}

export const getAllOpenedChats = (userEmail: string, setChat: any) => {
  let chats: Array<any> = []

  console.log(userEmail)

  const setQuery = query(
    collection(db, 'users'),
    where('login', '==', userEmail)
  )

  const onsubscribe = onSnapshot(setQuery, (querySnapshot) => {
    console.log(" listAllMessagesOfCurrentChat snapshot", querySnapshot.docs);  

    querySnapshot.forEach(doc => {
      const data = doc.data()
      
      console.log('data', ...data.chats)

      chats.push(...data.chats)
    })
    setChat(chats)
  })
}

const getAllMessagesOfCurrentChating = (chatId: string, userId: string, setMessages: any) => {
  const setQuery = query(collection(db, 'messages'), orderBy('timestamp'), where('chatId', '==', chatId))

  onSnapshot(setQuery, (querySnapshot) => {
    let messages: Array<any>= []

    querySnapshot.forEach(doc => {
      const data = doc.data()

      console.log(data)
    })
  })
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)