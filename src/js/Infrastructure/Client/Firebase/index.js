import firebaseApp from 'firebase/app';
import 'firebase/firestore';
import Config from '../../../Application/Config';

class FirebaseApp {
    constructor() {
        firebaseApp.initializeApp(Config.firebase);
        this.db = firebaseApp.firestore();
    }
}

export default new FirebaseApp();