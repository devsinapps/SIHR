const initState = {
	JOError: ''
}

const CandidateReducers = (state = initState, action) => {
	switch(action.type){
		case 'INPUT_C_SUCCESS':
			console.log('INPUT_C_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'INPUT_C_ERR':
			console.log('INPUT_C_ERR')
			return{
				...state,
				JOError:'INPUT_C_ERR'
			}
			break;

		case 'DELETE_CANDIDATES_SUCCESS':
			console.log('DELETE_CANDIDATES_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_CANDIDATES_SUCCESS':
			console.log('UPDATE_CANDIDATES_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_CANDIDATES_ERR':
			console.log('UPDATE_CANDIDATES_ERR')
			return{
				...state,
				JOError:'UPDATE_CANDIDATES_ERR'
			}
			break;

		default:
			return null
	}
}

export default CandidateReducers