export const signIn = (credentials) => {
	return(dispatch, getState, {getFirestore, getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password 
		).then(()=>{
			dispatch({
				type: "SIGNIN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNIN_ERROR",
				err
			})
		})
	}
}

export const signUp = (newUser) => {
	return(dispatch, getState, {getFirebase, getFirestore})=>{
		const firebase = getFirebase();
		const firestore = getFirestore();
		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then((resp)=>{
			return firestore.collection('users').doc(resp.user.uid).set({
				email: newUser.email,
				password: newUser.password,
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				initials: newUser.firstName[0] + newUser.lastName[0],
				level: 2,
				joinDate: new Date()
			})
		}).then(()=>{
			dispatch({
				type: "SIGNUP_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNUP_ERROR",
				err
			})
		})
	}
}

export const signOut = () => {
	return(dispatch, getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signOut().then(()=>{
			dispatch({
				type: "SIGNOUT_SUCCESS"
			})
		})
	}
}