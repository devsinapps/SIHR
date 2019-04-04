const initState = {
	JOError: ''
}

const JOReducers = (state = initState, action) => {
	switch(action.type){
		case 'INPUT_JOB_SUCCESS':
			console.log('INPUT_JOB_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'INPUT_JOB_ERR':
			console.log('INPUT_JOB_ERR')
			return{
				...state,
				JOError:'INPUT_JOB_ERR'
			}
			break;

		case 'DELETE_JOB_SUCCESS':
			console.log('DELETE_JOB_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_JOB_SUCCESS':
			console.log('UPDATE_JOB_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_JOB_ERR':
			console.log('UPDATE_JOB_ERR')
			return{
				...state,
				JOError:'UPDATE_JOB_ERR'
			}
			break;

		default:
			return null
	}
}

export default JOReducers