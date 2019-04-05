import React, { Component } from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Action
import { inputI, deleteI, updateI } from './../../../../store/actions/interviewsActions'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { InterviewsTable } from './InterviewsTable'
import { InterviewsForm } from './InterviewsForm'
//mdbreact
import { ToastContainer, toast } from 'mdbreact'
class Interviews extends Component{
	state = {
		loading:true,
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

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		},3000)
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	notify = (type) => {
		switch(type){
			case 'formEmpty':
			toast.error("Form Can't Empty", {
		          autoClose: 3000
		        });
		        break;

		    case 'selectFirst':
			toast.error("Select Data First", {
		          autoClose: 3000
		        });
		        break;

		}
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
				if(interviewName.length < 1 ||
					candidateName.length < 1 ||
					clientName.length < 1 ||
					postingTitle.length < 1 ||
					fromDate.length < 1 ||
					toDate.length < 1 ||
					interviewer.length < 1 ||
					interviewOwner.length < 1 ||
					location.length < 1 ||
					scheduleComments.length < 1){
					this.notify('formEmpty')
				}else{
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
				}
				
				break;

			case 'UPDATE':
				if( id.length < 1 ||
					interviewName.length < 1 ||
					candidateName.length < 1 ||
					clientName.length < 1 ||
					postingTitle.length < 1 ||
					fromDate.length < 1 ||
					toDate.length < 1 ||
					interviewer.length < 1 ||
					interviewOwner.length < 1 ||
					location.length < 1 ||
					scheduleComments.length < 1){
					this.notify('selectFirst')
				}else{
					const checkUpd = window.confirm('Update?')
					if(checkUpd === true){
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
					}else{
						return null
					}
				}
				
				break;

			case 'DELETE':
				if( id.length < 1 ||
					interviewName.length < 1 ||
					candidateName.length < 1 ||
					clientName.length < 1 ||
					postingTitle.length < 1 ||
					fromDate.length < 1 ||
					toDate.length < 1 ||
					interviewer.length < 1 ||
					interviewOwner.length < 1 ||
					location.length < 1 ||
					scheduleComments.length < 1){
					this.notify('selectFirst')
				}else{
					const checkDel = window.confirm('Delete?');
					if(checkDel === true){
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
					}else{
						return null
					}
				}
				
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
		const { loading } = this.state
		const { dataRoutes } = this.props
		const { interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments } = this.state
		const value = { interviewName,candidateName,clientName,postingTitle,fromDate,toDate,interviewer,interviewOwner,location,scheduleComments }
		// if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
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
						<ToastContainer
					          hideProgressBar={true}
					          newestOnTop={true}
					          autoClose={5000}
					        />
					</ContainerFluidRow>
				</div>
			)
		}
		else{
			return(
				<div className="Loading text-center">
					<img src={Loading} alt="loading"/>
				</div>
			)
		}
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