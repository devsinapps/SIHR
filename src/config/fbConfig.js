 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDms2TZ7AA8sTuimNkW66kefpu5nVQxSZ0",
    authDomain: "sihr-2019.firebaseapp.com",
    databaseURL: "https://sihr-2019.firebaseio.com",
    projectId: "sihr-2019",
    storageBucket: "sihr-2019.appspot.com",
    messagingSenderId: "437900163111"
  };
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase