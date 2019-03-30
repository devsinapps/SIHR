export const inputKanban = (kanban) => {
	return(dispatch, getState, {getFirestore, getFirebase})=>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid

		firestore.collection('kanban').add({
			...kanban,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			status: 'onprogress',
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "CREATE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "CREATE_ERROR",
				err
			})
		})
	}
}

export const deleteKanban = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('kanban').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_KANBAN"
			})
		})
	}
}

export const updateKanban = (kanban) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('kanban').doc(kanban.id).set({
			title: kanban.title,
			content: kanban.content,
			deadline: kanban.deadline,
			status: kanban.status,
			authorFirstName: kanban.authorFirstName,
			authorLastName: kanban.authorLastName,
			authorId: kanban.authorId,
			createdAt: kanban.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_KANBAN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_KANBAN_ERROR",
				err
			})
		})
	}
}
