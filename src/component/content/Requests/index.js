import React from 'react'
import Loading from './../../../assets/images/Loading.png'
//actions
import { createRequests, deleteRequests, updateRequests } from './../../../store/actions/requestsActions'
//tools
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//Component
import { CreateRequests } from './CreateRequests'
import { RequestsSummary } from './RequestsSummary'
//reactstrap
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//Grid
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'
class Requests extends React.Component{
	state = {
		modal: false,
		loading: true,
		id: '',
		title: '',
		content: '',
		status: '',
		authorFirstName: '',
		authorLastName: '',
		authorId: '',
		email: '',
		doneDate: '',
		createdAt: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		}, 3000)
	}

	formAction = (mode, dataRequest) => {
		const { modal, id, title, content, status, authorFirstName, authorLastName, authorId, email, doneDate, createdAt } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					modal: !this.state.modal,
					id: dataRequest.id,
					title: dataRequest.title,
					content: dataRequest.content,
					status: dataRequest.status,
					authorFirstName: dataRequest.authorFirstName,
					authorLastName: dataRequest.authorLastName,
					authorId: dataRequest.authorId,
					email: dataRequest.email,
					doneDate: dataRequest.doneDate,
					createdAt: dataRequest.createdAt
				})
				break;

			case 'CLOSE':
				this.setState({
					modal: !this.state.modal,
					id: '',
					title: '',
					content: '',
					status: '',
					authorFirstName: '',
					authorLastName: '',
					authorId: '',
					email: '',
					doneDate: '',
					createdAt: ''
				})
				break;

			case 'SAVE':
				const dataInput = {
					content,
					title
				}

				this.props.createRequests(dataInput)
				this.setState({
					title: '',
					content: ''
				})
				break;

			case 'UPDATE':
				const checkUpd = window.confirm('Update')
				const dataUpdate = {
					id, 
					title, 
					content, 
					status, 
					authorFirstName, 
					authorLastName, 
					authorId, 
					email, 
					doneDate, 
					createdAt
				}
				if(checkUpd === true){
					this.props.updateRequests(dataUpdate)
					this.setState({
						modal: !this.state.modal,
						id: '',
						title: '',
						content: '',
						status: '',
						authorFirstName: '',
						authorLastName: '',
						authorId: '',
						email: '',
						doneDate: '',
						createdAt: ''
					})
				}else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete')
				if(checkDel === true){
					this.props.deleteRequests(id)
					this.setState({
						modal: !this.state.modal,
						id: '',
						title: '',
						content: '',
						status: '',
						authorFirstName: '',
						authorLastName: '',
						authorId: '',
						email: '',
						doneDate: '',
						createdAt: ''
					})
				}else{
					return null
				}
				break;

			default:
				return null

		}
	}
	render(){
		const { dataRoutes } = this.props
		const { modal, loading, id, title, content, status, authorFirstName, authorLastName, authorId, email, doneDate, createdAt } = this.state
		const value = { modal, id, title, content, status, authorFirstName, authorLastName, authorId, email, doneDate, createdAt }
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='Requests'>
					<ContainerFluidRow rowClass=''>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
								    <BreadcrumbItem active> 
								    	<a> Requests Page </a>
								    </BreadcrumbItem>
								</Breadcrumb>
						</Col_B>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Row>
								<Col_B lgCol='4' mdCol='4' smCol='4'>
									<Row>
										<ColCard lgCol='12' mdCol='12' smCol='12' colClass='' brCard='mb-3' tlCard=''>
											<CreateRequests 
												value={value}
												onChange={this.onChange}
												formAction={this.formAction}
											/>
										</ColCard>
									</Row>
								</Col_B>
								<Col_B lgCol='8' mdCol='8' smCol='8'>
									<Row>
										<Col_B lgCol='12' mdCol='12' smCol='12'>
											{dataRoutes.firestore.ordered.requests && dataRoutes.firestore.ordered.requests.map((request)=>{
												return(
													<RequestsSummary 
														value={value}
														key={request.id} 
														dataRoutes={dataRoutes}
														request={request}
														onChange={this.onChange}
														formAction={this.formAction}
													/>
												)
												})
											}
										</Col_B>
									</Row>
								</Col_B>
							</Row>
						</Col_B>
					</ContainerFluidRow>
				</div>
			)
		}else{
			return(
				<div className='Loading text-center'>
					<img src={Loading} />
				</div>
			)
		} 
		
	}
}


const mapDispatchToProps = (dispatch) => {
	return{
		createRequests: (dataInput) => dispatch (createRequests(dataInput)),
		updateRequests: (dataUpdate) => dispatch (updateRequests(dataUpdate)),
		deleteRequests: (id) => dispatch (deleteRequests(id))
	}
}

export default connect(null, mapDispatchToProps)(Requests)