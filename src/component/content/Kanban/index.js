import React from 'react'
import Loading from './../../../assets/images/Loading.png'
//Actions
import {deleteKanban, updateKanban, inputKanban} from './../../../store/actions/kanbanActions'
//Component
import { CreateKanban } from './CreateKanban'
import { KanbanSummary } from  './KanbanSummary'
//Tools
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//grid 
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'
class Kanban extends React.Component{
	state = {
		modal: false,
		loading: true,
		id: '',
		title: '',
		content: '',
		deadline: '',
		status: '',
		authorFirstName: '',
		authorLastName: '',
		authorId: '',
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

	formAction = (mode, dataKanban) => {
		const { id, title, content, deadline, status, authorFirstName, authorLastName, authorId, createdAt } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					modal: !this.state.modal,
					id: dataKanban.id,
					title: dataKanban.title,
					content: dataKanban.content,
					deadline: dataKanban.deadline,
					status: dataKanban.status,
					authorFirstName: dataKanban.authorFirstName,
					authorLastName: dataKanban.authorLastName,
					authorId: dataKanban.authorId,
					createdAt: dataKanban.createdAt
				})
				break;

			case 'CLOSE':
				this.setState({
					modal:  !this.state.modal,
					id: '',
					title: '',
					content: '',
					deadline: '',
					status: '',
					authorFirstName: '',
					authorLastName: '',
					authorId: '',
					createdAt: ''
				})
				break;

			case 'MODAL':
				this.setState({
					modal: !this.state.modal,
					id: '',
					title: '',
					content: '',
					deadline: '',
					status: '',
					authorFirstName: '',
					authorLastName: '',
					authorId: '',
					createdAt: ''
				});
				break;
				
			case 'SAVE':
				const dataKanbanSave = {
					title, 
					content, 
					deadline
				}
				this.props.inputKanban(dataKanbanSave)
				this.setState({
					title: '',
					content: '',
					deadline: ''
				})
				break;

			case 'UPDATE':
				const checkUpd = window.confirm('Update?');
				const dataKanbanUpdate = { 
					id, 
					title, 
					content, 
					deadline, 
					status, 
					authorFirstName, 
					authorLastName, 
					authorId, 
					createdAt 
				}

				if(checkUpd === true){
					this.props.updateKanban(dataKanbanUpdate)
					this.setState({
						modal: !this.state.modal,
						id: '',
						title: '',
						content: '',
						deadline: '',
						status: '',
						authorFirstName: '',
						authorLastName: '',
						authorId: '',
						createdAt: '',
					});
				}else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?');
				if(checkDel === true){
					this.props.deleteKanban(id)
					this.setState({
						modal: !this.state.modal,
						id: '',
						title: '',
						content: '',
						deadline: '',
						status: '',
						authorFirstName: '',
						authorLastName: '',
						authorId: '',
						createdAt: '',
					});
				}else{
					return null
				}
				break;

			default: 
				return  null
		}	
	}

	render(){
		const { modal, loading,  id, title, content, deadline, status, authorFirstName, authorLastName, authorId, createdAt } = this.state
		const { dataRoutes } = this.props 
		const dataState = {
			modal,
			id, 
			title, 
			content, 
			deadline, 
			status, 
			authorFirstName, 
			authorLastName, 
			authorId, 
			createdAt
		}
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/' />;
		if(loading != true){
			return(
				<div className="KanBan">
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
						        <BreadcrumbItem active>
						        	<a> Kanban </a>
						        </BreadcrumbItem>
						     </Breadcrumb>
						     <Card_B brCard='mb-3' tlCard=''>
						     	<CreateKanban 
						     		dataState={dataState}
									onChange={this.onChange}
									formAction={this.formAction}
								/>
						     </Card_B>
						</Col_B>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Row>
								{dataRoutes.firestore.ordered.kanban && dataRoutes.firestore.ordered.kanban.map((data)=>{
										if(dataRoutes.firebase.profile.level === 1){
											return(
												<KanbanSummary 
													key={data.id} 
													data={data}
													dataState={dataState}
													dataRoutes={dataRoutes}
													formAction={this.formAction}
													onChange={this.onChange}
												/>
											)
										}else if(dataRoutes.firebase.auth.uid === data.authorId){
											return(
												<KanbanSummary 
													key={data.id} 
													data={data}
													dataState={dataState}
													dataRoutes={dataRoutes}
													formAction={this.formAction}
													onChange={this.onChange}
												/>
											)
										}else{
											return null
										}
									})
								}
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

const mapDispatchToProps = (dispath) => {
	return{
		inputKanban: (dataKanbanSave) => dispath(inputKanban(dataKanbanSave)),
		deleteKanban: (id) => dispath(deleteKanban(id)),
		updateKanban: (dataKanbanUpdate) => dispath(updateKanban(dataKanbanUpdate))
	}
}

export default connect(null, mapDispatchToProps)(Kanban)