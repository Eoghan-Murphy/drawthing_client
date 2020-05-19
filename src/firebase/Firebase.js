import {firebase_config} from '../localConfig'
import app from 'firebase/app'

class Firebase {
    constructor(){
        app.initializeApp(firebase_config)
    }
}

export default Firebase