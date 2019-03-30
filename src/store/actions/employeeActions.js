export const inputEmployee = (employee) => {
	return(dispatch, getState, {getFirebase, getFirestore})=>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile
		const authorId = getState().firebase.auth.uid
		firestore.collection('employees').add({
			...employee,
			authorCreated: profile.firstName + ' ' + profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "INPUT_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_ERROR",
				err
			})
		})
	}
}

export const deleteEmployee = (employeeId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employeeId).delete().then(()=>{
			dispatch({
				type: "DELETE_SUCCESS"
			})
		})
	}
}

export const updateEmployee = (employee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employee.id).set({
			employeeId: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			age: employee.age,
			address: employee.address,
			idCard: employee.idCard,
			gender: employee.gender,
			dob: employee.dob,
			pob: employee.pob,
			dateJoin: employee.dateJoin,
			division: employee.division,
			status: employee.status,
			active: employee.active,
			authorCreated: employee.authorCreated,
			authorId: employee.authorId,
			createdAt:employee.createdAt
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
