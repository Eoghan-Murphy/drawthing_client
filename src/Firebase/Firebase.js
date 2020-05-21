import {firebase_config} from '../localConfig'
import app from 'firebase/app'
import 'firebase/auth'

class Firebase {
    constructor(){
        app.initializeApp(firebase_config)
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword(email, password){
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    doSignInWithEmailAndPassword(email, password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    doSignOut(){
        return this.auth.signOut();
    }
}

export default Firebase