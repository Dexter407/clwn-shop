import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCrXWBON1MrJiH2zOjWMG0RyCrrlK2_OwA",
  authDomain: "crwn-db-9b6ad.firebaseapp.com",
  projectId: "crwn-db-9b6ad",
  storageBucket: "crwn-db-9b6ad.appspot.com",
  messagingSenderId: "546552311982",
  appId: "1:546552311982:web:412336ea01e7821032bd3f",
  measurementId: "G-STK29JQTJY",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Return a user Reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //Return a snapshot document of that user id
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
