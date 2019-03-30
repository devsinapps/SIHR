export const createRequests = (request) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const email = getState().firebase.auth.email
		const authorId = getState().firebase.auth.uid
		firestore.collection('requests').add({
			...request,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			status: 'waiting',
			email: email,
			createdAt: new Date(),
			doneDate: '--'
		}).then(()=>{
			dispatch({
				type: "REQUEST_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "REQUEST_ERROR",
				err
			})
		})
	}
}

export const deleteRequests = (requestId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('requests').doc(requestId).delete().then(()=>{
			dispatch({
				type: "DELETE_REQUETS_SUCCESS"
			})
		})
	}
}

export const updateRequests = (request) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('requests').doc(request.id).set({
			title: request.title,
			content: request.content,
			status: request.status,
			authorFirstName: request.authorFirstName,
			authorLastName: request.authorLastName,
			authorId: request.authorId,
			email: request.email,
			doneDate: new Date(),
			createdAt: request.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_REQUEST_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_REQUEST_ERROR",
				err
			})
		})
	}
}