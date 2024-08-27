import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";

import { addDoc, 
        collection,
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAvLa-jit06__R7tNT0ytssllB7stG08Jo",
  authDomain: "netflixpclone.firebaseapp.com",
  projectId: "netflixpclone",
  storageBucket: "netflixpclone.appspot.com",
  messagingSenderId: "269300150073",
  appId: "1:269300150073:web:b9818c9516bcd9500082e8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password)=> {
    
   try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
   } catch (error) {
       console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
       
   }

}




const  login = async (email,password)=>{
      try {
        signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
          console.log(error);
          toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}


const logout =()=>{

    signOut(auth);
}

export {auth, db,login, signup, logout}