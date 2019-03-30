const initState = {
	alertError: ''
}

const kanbanReducers = (state = initState, action) => {
	switch(action.type){
		case "CREATE_SUCCESS":
			console.log('create kanban success');
			return{
				...state,
				alertError: ''
			}

		case "CREATE_ERROR":
			console.log('create kanban error');
			return{
				...state,
				alertError: "create kanban error"
			}

		case "DELETE_KANBAN":
			console.log('DELETE_KANBAN');
			return{
				...state,
				alertError: ""
			}

		case "UPDATE_KANBAN_SUCCESS":
			console.log('UPDATE_KANBAN_SUCCESS');
			return{
				...state,
				alertError: ""
			}

		case "UPDATE_KANBAN_ERROR":
			console.log('UPDATE_KANBAN_ERROR');
			return{
				...state,
				alertError: "UPDATE_KANBAN_ERROR"
			}
		default:
			return state
	}
}

export default kanbanReducers