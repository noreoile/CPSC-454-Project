import firebase from 'firebase/compat/app'; 
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const config = {
	apiKey: "AIzaSyB04i-lI68q5XljUF1_yBNyheY_ARyDgpE",
	authDomain: "cpsc454-d5f61.firebaseapp.com",
	projectId: "cpsc454-d5f61",
	storageBucket: "cpsc454-d5f61.appspot.com",
	messagingSenderId: "290624584817",
	appId: "1:290624584817:web:c6a44f3c4ac03a90b46fd0",
	measurementId: "G-CGEPDZLSH5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
