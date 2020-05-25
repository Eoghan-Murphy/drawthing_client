import React from 'react'
import {Provider} from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { createStore, combineReducers} from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// react-redux-firebase config
const rrfConfig = {
  userProfile: null,
  useFirestoreForProfile: true
}

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

const withFirestoreRedux = Component => {
    class withFirestoreRedux extends React.Component {

        render(){
            return (
                <Provider store={store}>
                    <ReactReduxFirebaseProvider {...rrfProps}>
                        <Component {...this.props}/>
                    </ReactReduxFirebaseProvider>
                </Provider>
            )
        }
    }

    return withFirestoreRedux;
};

export default withFirestoreRedux;