export const inputI = (dataInput) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();

		firestore.collection('Interviews').add({
			...dataInput,
			interviewName: dataInput.interviewName,
			candidateName: dataInput.candidateName,
			clientName: dataInput.clientName,
			postingTitle: dataInput.postingTitle,
			fromDate: dataInput.fromDate,
			toDate: dataInput.toDate,
			interviewer: dataInput.interviewer,
			interviewOwner: dataInput.interviewOwner,
			location: dataInput.location,
			scheduleComments: dataInput.scheduleComments
		}).then(()=>{
			dispatch({
				type: "INPUT_INTERVIEW_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_INTERVIEW_ERR",
				err
			})
		})
	}
}

export const deleteI = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Interviews').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_INTERVIEWS_SUCCESS"
			})
		})
	}
}

export const updateI = (dataUpdate) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Interviews').doc(dataUpdate.id).set({
			interviewName: dataUpdate.interviewName,
			candidateName: dataUpdate.candidateName,
			clientName: dataUpdate.clientName,
			postingTitle: dataUpdate.postingTitle,
			fromDate: dataUpdate.fromDate,
			toDate: dataUpdate.toDate,
			interviewer: dataUpdate.interviewer,
			interviewOwner: dataUpdate.interviewOwner,
			location: dataUpdate.location,
			scheduleComments: dataUpdate.scheduleComments
		}).then(()=>{
			dispatch({
				type: "UPDATE_INTERVIEW_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_INTERVIEW_ERR",
				err
			})
		})
	}
}