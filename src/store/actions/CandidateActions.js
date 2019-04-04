export const inputC = (dataInput) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Candidates').add({
			...dataInput,
			email: dataInput.email,
			firstname: dataInput.firstname,
			phone: dataInput.phone,
			lastname: dataInput.lastname,
			website: dataInput.website,
			mobile: dataInput.mobile,
			secondaryEmail: dataInput.secondaryEmail,
			fax: dataInput.fax,
			street: dataInput.street,
			zip: dataInput.zip,
			city: dataInput.city,
			stateProvince: dataInput.stateProvince,
			country: dataInput.country,
			experience: dataInput.experience,
			highQualification: dataInput.highQualification,
			jobTitle: dataInput.jobTitle,
			currentEmployer: dataInput.currentEmployer,
			salary: dataInput.salary,
			currentSalary: dataInput.currentSalary,
			skill: dataInput.skill,
			additionalInfo: dataInput.additionalInfo	
		}).then(()=>{
			dispatch({
				type: "INPUT_C_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_C_ERR",
				err
			})
		})
	}
}

export const deleteC = (id) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Candidates').doc(id).delete().then(()=>{
			dispatch({
				type: "DELETE_CANDIDATES_SUCCESS"
			})
		})
	}
}

export const updateC = (dataUpdate) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('Candidates').doc(dataUpdate.id).set({
			email: dataUpdate.email,
			firstname: dataUpdate.firstname,
			phone: dataUpdate.phone,
			lastname: dataUpdate.lastname,
			website: dataUpdate.website,
			mobile: dataUpdate.mobile,
			secondaryEmail: dataUpdate.secondaryEmail,
			fax: dataUpdate.fax,
			street: dataUpdate.street,
			zip: dataUpdate.zip,
			city: dataUpdate.city,
			stateProvince: dataUpdate.stateProvince,
			country: dataUpdate.country,
			experience: dataUpdate.experience,
			highQualification: dataUpdate.highQualification,
			jobTitle: dataUpdate.jobTitle,
			currentEmployer: dataUpdate.currentEmployer,
			salary: dataUpdate.salary,
			currentSalary: dataUpdate.currentSalary,
			skill: dataUpdate.skill,
			additionalInfo: dataUpdate.additionalInfo	
		}).then(()=>{
			dispatch({
				type: "UPDATE_CANDIDATES_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_CANDIDATES_ERR",
				err
			})
		})
	}
}