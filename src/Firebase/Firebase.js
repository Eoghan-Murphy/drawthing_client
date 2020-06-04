import {firebase_config} from '../localConfig'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

class Firebase {
    constructor(){
        app.initializeApp(firebase_config)
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
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

    doSetFieldUser = (uid, field, value) => {
        let temp = {};
        temp[field] = value
        return this.db.collection("users").doc(uid).set(temp, {merge: true})
    }

    doSetProfilePic = (uid, imageBlob) => {
        var storageRef = this.storage.ref().child(`pp/${uid}`);
        return storageRef.put(imageBlob)
    }

    doGetProfilePic = (uid) => {
        var storageRef = this.storage.ref().child(`pp/${uid}`);
        return storageRef.getDownloadURL()
    }

    //Post

    doUploadPost = (uid, post) => {
        this.db.collection("posts").add(JSON.parse(JSON.stringify(post)))
        .then((data) => {
            let referenceToBeAdded = {};
            referenceToBeAdded[Date.now()] = data.id;
            return this.db.collection("userPosts").doc(uid).set(referenceToBeAdded, {merge: true});
        })
    }


    // cloud Storage

    doUploadFileReturnURL = (file, path = '') => {
        var storageRef = this.storage.ref().child(path);
        return storageRef.put(file)
        .then( () => {
            return storageRef.getDownloadURL();
        }
        )
    }

}

export default Firebase