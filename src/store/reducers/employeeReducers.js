const initState = {
	alertError: ''
}

const employeeReducers = (state = initState, action) =>{
	switch(action.type){
		case "INPUT_SUCCESS":
			console.log('input success')
			return{
				...state,
				alertError: ''
			}

		case "INPUT_ERROR":
			console.log('input error')
			return{
				...state,
				alertError: 'input error'
			}

		case "DELETE_SUCCESS":
			console.log('delete success')
			return{
				...state,
				alertError: ''
			}

		case "UPDATE_SUCCESS":
			console.log('UPDATE_SUCCESS')
			return{
				...state,
				alertError: ''
			}

		case "UPDATE_ERROR":
			console.log('UPDATE_ERROR')
			return{
				...state,
				alertError: 'UPDATE_ERROR'
			}

		default:
			return state
	}
}

export default employeeReducers