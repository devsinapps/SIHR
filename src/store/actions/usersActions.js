export const updateUser = (dataUSer) =>{
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').doc(dataUSer.id).set({
			firstName:dataUSer.firstName,
			lastName:dataUSer.lastName,
			initials:dataUSer.firstName[0]+dataUSer.lastName[0],
			email:dataUSer.email,
			password:dataUSer.password,
			level:dataUSer.parseLevel,
			joinDate:dataUSer.joinDate
		}).then(()=>{
			dispatch({
				type: "UPDATE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_ERROR",
				err 
			})
		})
	}
}

export const deleteUser = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_SUCCESS"
			})
		})
	}
}