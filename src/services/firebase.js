import * as firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from 'config/firebase.json';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getFirebasePlaces = () =>
  db
    .collection('fl_content')
    .where('published', '==', true)
    .get();

export const sanitize = data => ({
  ...data,
  _fl_meta_: {
    ...data._fl_meta_,
    schemaRef: null,
  },
});
