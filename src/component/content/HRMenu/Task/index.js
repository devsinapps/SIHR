import React, { Component } from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Action
import { inputTask, updateTask, deleteTask } from './../../../../store/actions/taskActions'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { TaskForm } from './TaskForm'
import { TaskTable } from './TaskTable'
//mdbreact
import { ToastContainer, toast } from 'mdbreact'
class Task extends Component{
	state = {
		loading:true,
		id: '',
		subject: '',
		toDo: '',
		fromDate: '',
		toDate: '',
		status: '',
		priority: ''
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
			case "formEmpty":
			toast.error("Form Can't Empty", {
	          autoClose: 3000
	        });
	        break;

	        case "selectFirst":
			toast.error("Select Data First", {
	          autoClose: 3000
	        });
	        break;
		}
	}

	formAction = (mode, data) => {
		const {id, subject, toDo, fromDate, toDate, status, priority} = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					id: data.id,
					subject: data.subject,
					toDo: data.toDo,
					fromDate: data.fromDate,
					toDate: data.toDate,
					status: data.status,
					priority: data.priority
				})
				break;

			case 'SAVE':
				if( subject.length < 1 ||
					toDo.length < 1 ||
				   	fromDate.length < 1 ||
				   	toDate.length < 1 ||
				   	status.length < 1 ||
				   	priority.length < 1){
					this.notify('formEmpty')
				}else{
					const dataInput = { subject, toDo, fromDate, toDate, status, priority }
					this.props.inputTask(dataInput)
					this.setState({
						subject: '',
						toDo: '',
						fromDate: '',
						toDate: '',
						status: '',
						priority: ''
					})
				}
				break;

			case 'UPDATE':
				if( id.length < 1 ||
					subject.length < 1 ||
					toDo.length < 1 ||
				   	fromDate.length < 1 ||
				   	toDate.length < 1 ||
				   	status.length < 1 ||
				   	priority.length < 1){
					this.notify('selectFirst')
				}else{
					const checkUpd = window.confirm('Update?')
					if(checkUpd === true){
						const dataUpdate = { id, subject, toDo, fromDate, toDate, status, priority }
						this.props.updateTask(dataUpdate)
						this.setState({
							subject: '',
							toDo: '',
							fromDate: '',
							toDate: '',
							status: '',
							priority: ''
						})
					}else{
						return null
					}
				}
				break;

			case 'DELETE':
				if( id.length < 1 ||
					subject.length < 1 ||
					toDo.length < 1 ||
				   	fromDate.length < 1 ||
				   	toDate.length < 1 ||
				   	status.length < 1 ||
				   	priority.length < 1){
					this.notify('selectFirst')
				}else{
					const checkDel = window.confirm('Delete?')
					if(checkDel === true){
						this.props.deleteTask(id)
						this.setState({
							subject: '',
							toDo: '',
							fromDate: '',
							toDate: '',
							status: '',
							priority: ''
						})
					}else{
						return null
					}
				}
				break;

			case 'RESET':
				this.setState({
					subject: '',
					toDo: '',
					fromDate: '',
					toDate: '',
					status: '',
					priority: ''
				})
				break;
		}
	}
	render(){
		const { loading } = this.state
		const { id,	subject,	toDo,	fromDate,	toDate,	status,	priority } = this.state
		const { dataRoutes } = this.props
		const value = { id,	subject,	toDo,	fromDate,	toDate,	status,	priority }
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='Task'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Task'>
						<TaskTable 
							dataRoutes={dataRoutes}
							formAction={this.formAction}
						/>
					</Collapsible>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Task'>
						<TaskForm 
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
		inputTask: (dataInput) =>  dispatch(inputTask(dataInput)),
		updateTask: (dataUpdate) => dispatch(updateTask(dataUpdate)),
		deleteTask: (id) => dispatch(deleteTask(id))
	}
}

export default connect(null, mapDispatchToProps)(Task)