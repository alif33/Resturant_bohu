import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBXRVIwIQfLB55x5N5ftNSF31SZnhyvIsg",
    authDomain: "react-native-auth-5f51f.firebaseapp.com",
    databaseURL: "https://react-native-auth-5f51f.firebaseio.com",
    projectId: "react-native-auth-5f51f",
    storageBucket: "react-native-auth-5f51f.appspot.com",
    messagingSenderId: "271349456501",
    appId: "1:271349456501:web:d796d824db29b036a0e23c"
}
firebase.initializeApp(config)
export default firebase