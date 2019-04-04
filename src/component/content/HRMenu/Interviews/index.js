import React, { Component } from 'react'
//Action
import { inputI, deleteI, updateI } from './../../../../store/actions/interviewsActions'
//Tools
import { connect } from 'react-redux'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { InterviewsTable } from './InterviewsTable'
import { InterviewsForm } from './InterviewsForm'
class Interviews extends Component{
	state = {
		id: '',
		interviewName: '',
		candidateName: '',
		clientName: '',
		postingTitle: '',
		fromDate: '',
		toDate: '',
		interviewer: '',
		interviewOwner: '',
		location: '',
		scheduleComments: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	formAction = (mode, data) => {
		const { id,interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					id: data.id,
					interviewName: data.interviewName,
					candidateName: data.candidateName,
					clientName: data.clientName,
					postingTitle: data.postingTitle,
					fromDate: data.fromDate,
					toDate: data.toDate,
					interviewer: data.interviewer,
					interviewOwner: data.interviewOwner,
					location: data.location,
					scheduleComments: data.scheduleComments
				})
				break;

			case 'SAVE':
				const dataInput = {
					interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments
				}
				this.props.inputI(dataInput)
				this.setState({
					interviewName: '',
					candidateName: '',
					clientName: '',
					postingTitle: '',
					fromDate: '',
					toDate: '',
					interviewer: '',
					interviewOwner: '',
					location: '',
					scheduleComments: ''
				})
				break;

			case 'UPDATE':
				const dataUpdate = {
					id, interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments
				}
				this.props.updateI(dataUpdate)
				this.setState({
					interviewName: '',
					candidateName: '',
					clientName: '',
					postingTitle: '',
					fromDate: '',
					toDate: '',
					interviewer: '',
					interviewOwner: '',
					location: '',
					scheduleComments: ''
				})
				break;

			case 'DELETE':
				this.props.deleteI(id)
				this.setState({
					interviewName: '',
					candidateName: '',
					clientName: '',
					postingTitle: '',
					fromDate: '',
					toDate: '',
					interviewer: '',
					interviewOwner: '',
					location: '',
					scheduleComments: ''
				})
				break;

			case 'RESET':
				this.setState({
					interviewName: '',
					candidateName: '',
					clientName: '',
					postingTitle: '',
					fromDate: '',
					toDate: '',
					interviewer: '',
					interviewOwner: '',
					location: '',
					scheduleComments: ''
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { dataRoutes } = this.props
		const { interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments } = this.state
		const value = { interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments }
		return(
			<div className='Interviews'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Interviews'>
						<InterviewsTable 
							dataRoutes={dataRoutes}
							formAction={this.formAction}
						/>
					</Collapsible>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Interview'>
						<InterviewsForm 
							value={value}
							onChange={this.onChange}
							formAction={this.formAction}
						/>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputI: (dataInput) => dispatch(inputI(dataInput)),
		deleteI: (id) => dispatch(deleteI(id)),
		updateI: (dataUpdate) =>  dispatch(updateI(dataUpdate))
	} 
}

export default connect(null, mapDispatchToProps)(Interviews) 