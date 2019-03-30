const initState = {
	userError: ''
}

const userReducer = (state = initState, action) => {
	switch(action.type){
		case "UPDATE_SUCCESS":
			console.log('UPDATE_SUCCESS')
			return{
				...state,
				userError: ''
			}
			break;

		case "UPDATE_ERROR":
			console.log('UPDATE_ERROR')
			return{
				...state,
				userError: 'UPDATE_ERROR'
			}
			break;

		case "DELETE_SUCCESS":
			console.log('DELETE_SUCCESS')
			return{
				...state,
				userError: ''
			}
			break;

		default:
			return null
	}
}

export default userReducer