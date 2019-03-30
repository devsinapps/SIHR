const initState = {
	requestError: ''
}

const requestsReducer = (state = initState, action) => {
	switch(action.type){
		case "REQUEST_SUCCESS":
			console.log('request success')
			return{
				...state,
				requestError: ''
			}

		case "REQUEST_ERROR":
			console.log('request error')
			return{
				...state,
				requestError: "request error"
			}

		case "DELETE_REQUETS_SUCCESS":
			console.log("DELETE_REQUETS_SUCCESS")
			return{
				...state,
				requestError: ''
			}

		case "DELETE_REQUETS_ERROR":
			console.log("DELETE_REQUETS_ERROR")
			return{
				...state,
				requestError: "DELETE_REQUETS_ERROR"
			}

		case "UPDATE_REQUEST_SUCCESS":
			console.log("UPDATE_REQUEST_SUCCESS")
			return{
				...state,
				requestError: ""
			}

		case "UPDATE_REQUEST_ERROR":
			console.log("UPDATE_REQUEST_ERROR")
			return{
				...state,
				requestError: "UPDATE_REQUEST_ERROR"
			}
			
		default:
			return state
	}
}

export default requestsReducer