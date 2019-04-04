export const inputTask = (dataInput) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Task').add({
			...dataInput,
			subject: dataInput.subject,
			toDo: dataInput.toDo,
			fromDate: dataInput.fromDate,
			toDate: dataInput.toDate,
			status: dataInput.status,
			priority: dataInput.priority
		}).then(()=>{
			dispatch({
				type: "INPUT_TASK_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_TASK_ERR",
				err
			})
		})
	}
}

export const updateTask = (dataUpdate) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Task').doc(dataUpdate.id).set({
			subject: dataUpdate.subject,
			toDo: dataUpdate.toDo,
			fromDate: dataUpdate.fromDate,
			toDate: dataUpdate.toDate,
			status: dataUpdate.status,
			priority: dataUpdate.priority
		}).then(()=>{
			dispatch({
				type: "UDPATE_TASK_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UDPATE_TASK_ERR",
				err
			})
		})
	}
}

export const deleteTask = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Task').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_TASK_SUCCESS"
			})
		})
	}
}