import * as firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from 'config/firebase.json';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getFirebasePlaces = () =>
  db
    .collection('places')
    .where('published', '==', true)
    .get();
