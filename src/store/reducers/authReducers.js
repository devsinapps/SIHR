const initState = {
	authError: null
}

const authReducers = (state = initState, action) => {
	switch(action.type){
		case "SIGNIN_SUCCESS":
			console.log('signin success')
			return{
				...state,
				authError: ''
			}
		case "SIGNIN_ERROR":
			console.log('signin error')
			return{
				...state,
				authError: 'SIGNIN_ERROR'
			}
		case "SIGNOUT_SUCCESS":
			console.log("signout success")
			return{
				...state,
				authError: null
			}

		case "SIGNUP_SUCCESS":
			console.log('signup success')
			return{
				...state,
				authError: null
			}

		case "SIGNUP_ERROR":
			console.log('signup error')
			return{
				...state,
				authError: 'signup error'
			}
		default:
			return state
	}
}

export default authReducers