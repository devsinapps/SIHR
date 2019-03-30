const initState = {
	infoError : ''
}

const informationReducers = (state = initState, action) => {
	switch(action.type){
		case "CREATE_INFO_SUCCESS":
			console.lo('CREATE_INFO_SUCCESS')
			return{
				...state,
				infoError: ''
			}

		case "CREATE_INFO_ERROR":
			console.log('CREATE_INFO_ERROR')
			return{
				...state,
				infoError: 'CREATE_INFO_ERROR'
			}

		default:
			return state
	}
}

export default informationReducers