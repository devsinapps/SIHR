export const createInformation = (info) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid
		firestore.collection('information').add({
			...info,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "CREATE_INFO_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "CREATE_INFO_ERROR",
				err
			})
		})
	}
}