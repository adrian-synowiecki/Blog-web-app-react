import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyB0K_d8TGeuFDl0nqWLwN6q0aZYI_QHBsE',
	authDomain: 'conduit-189fc.firebaseapp.com',
	databaseURL: 'https://conduit-189fc.firebaseio.com',
	projectId: 'conduit-189fc',
	storageBucket: '',
	messagingSenderId: '205553916085',
	appId: '1:205553916085:web:1c45db4f16c33d66b146fc'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();