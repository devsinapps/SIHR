const initState = {
	InterviewError: ''
}

const interviewsReducers = (state = initState, action) => {
	switch(action.type){
		case 'INPUT_INTERVIEW_SUCCESS':
			console.log('INPUT_INTERVIEW_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'INPUT_INTERVIEW_ERR':
			console.log('INPUT_INTERVIEW_ERR')
			return{
				...state,
				JOError:'INPUT_INTERVIEW_ERR'
			}
			break;

		case 'DELETE_INTERVIEWS_SUCCESS':
			console.log('DELETE_INTERVIEWS_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_INTERVIEW_SUCCESS':
			console.log('UPDATE_INTERVIEW_SUCCESS')
			return{
				...state,
				JOError:''
			}
			break;

		case 'UPDATE_INTERVIEW_ERR':
			console.log('UPDATE_INTERVIEW_ERR')
			return{
				...state,
				JOError:'UPDATE_INTERVIEW_ERR'
			}
			break;

		default:
			return null
	}
}

export default interviewsReducers