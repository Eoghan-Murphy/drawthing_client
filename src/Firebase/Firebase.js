import {firebase_config} from '../localConfig'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class Firebase {
    constructor(){
        app.initializeApp(firebase_config)
        this.auth = app.auth();
        this.db = app.firestore();
    }

    //Auth

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    doSignOut = () => {
        return this.auth.signOut();
    }

    //User

    doSetUser = (uid, user) => {
        return this.db.collection("users").doc(uid).set(user)
    }




}

export default Firebase