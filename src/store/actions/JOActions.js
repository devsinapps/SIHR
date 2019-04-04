export const inputJO = (dataInput) => {
	return (dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('JobOpenings').add({
			...dataInput,
			postingTitle: dataInput.postingTitle,
			accountManager: dataInput.accountManager,
			dateOpened: dataInput.dateOpened,
			targetDate: dataInput.targetDate,
			jobType: dataInput.jobType,
			jobStatus: dataInput.jobStatus,
			country: dataInput.country,
			city: dataInput.city,
			stateProvince: dataInput.stateProvince,
			zip: dataInput.zip,
			experience: dataInput.experience,
			skill: dataInput.skill,
			salary: dataInput.salary
		}).then(()=>{
			dispatch({
				type: "INPUT_JOB_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_JOB_ERR",
				err
			})
		})
	}
}

export const deleteJO = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('JobOpenings').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_JOB_SUCCESS"
			})
		})
	}
}

export const updateJO = (dataUpdate) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('JobOpenings').doc(dataUpdate.id).set({
			postingTitle: dataUpdate.postingTitle,
			accountManager: dataUpdate.accountManager,
			dateOpened: dataUpdate.dateOpened,
			targetDate: dataUpdate.targetDate,
			jobType: dataUpdate.jobType,
			jobStatus: dataUpdate.jobStatus,
			country: dataUpdate.country,
			city: dataUpdate.city,
			stateProvince: dataUpdate.stateProvince,
			zip: dataUpdate.zip,
			experience: dataUpdate.experience,
			skill: dataUpdate.skill,
			salary: dataUpdate.salary
		}).then(()=>{
			dispatch({
				type: "UPDATE_JOB_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_JOB_ERR",
				err
			})
		})
	}
}