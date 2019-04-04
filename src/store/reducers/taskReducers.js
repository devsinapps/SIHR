const initState = {
	userError: ''
}

const taskReducers = (state = initState, action) => {
	switch(action.type){
		case "INPUT_TASK_SUCCESS":
			console.log('INPUT_TASK_SUCCESS')
			return{
				...state,
				userError: ''
			}
			break;

		case "INPUT_TASK_ERR":
			console.log('INPUT_TASK_ERR')
			return{
				...state,
				userError: 'INPUT_TASK_ERR'
			}
			break;

		case "DELETE_TASK_SUCCESS":
			console.log('DELETE_TASK_SUCCESS')
			return{
				...state,
				userError: ''
			}
			break;

		case "UDPATE_TASK_SUCCESS":
			console.log('UDPATE_TASK_SUCCESS')
			return{
				...state,
				userError: ''
			}
			break;

		case "UDPATE_TASK_ERR":
			console.log('UDPATE_TASK_ERR')
			return{
				...state,
				userError: 'UDPATE_TASK_ERR'
			}
			break;

		default:
			return null
	}
}

export default taskReducers