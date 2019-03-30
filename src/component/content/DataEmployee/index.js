import React from 'react'
//Actions
import {inputEmployee, deleteEmployee, updateEmployee} from './../../../store/actions/employeeActions'
//Component
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Style
import Loading from './../../../assets/images/Loading.png'
//Reactstrap
import { Container, Row, Col, Card, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//Grid
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'
class DataEmployee extends React.Component{
	state = {
		loading: true,
		id: '',
		firstName: '',
		lastName: '',
		age: '',
		address: '',
		idCard: '',
		gender: '',
		dob: '',
		pob: '',
		dateJoin: '',
		division: '',
		status: '',
		active: '',
		authorCreated: '',
		authorId: '',
		createdAt:''
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

	formAction = (mode, dataEmployee) => {
		const {  id, firstName, lastName, age, address, idCard, gender, dob, pob, dateJoin, division, status, active, authorCreated, authorId, createdAt } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					id: dataEmployee.id,
					firstName: dataEmployee.firstName,
					lastName: dataEmployee.lastName,
					age: dataEmployee.age,
					address: dataEmployee.address,
					idCard: dataEmployee.idCard,
					gender: dataEmployee.gender,
					dob: dataEmployee.dob,
					pob: dataEmployee.pob,
					dateJoin: dataEmployee.dateJoin,
					division: dataEmployee.division,
					status: dataEmployee.status,
					active: dataEmployee.active,
					authorCreated: dataEmployee.authorCreated,
					authorId: dataEmployee.authorId,
					createdAt: dataEmployee.createdAt
				})
				break;

			case "SAVE":
				const dataInput = {
					firstName, 
					lastName, 
					age, 
					address, 
					idCard, 
					gender, 
					dob, 
					pob, 
					dateJoin, 
					division, 
					status, 
					active
				}
				this.props.inputEmployee(dataInput)
				this.setState({
					firstName: '',
					lastName: '',
					age: '',
					address: '',
					idCard: '',
					gender: '',
					dob: '',
					pob: '',
					dateJoin: '',
					division: '',
					status: '',
					active: ''
				})
				break;

			case 'UPDATE':
				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					const dataUpdate = {
				 		id,
						firstName, 
						lastName, 
						age, 
						address, 
						idCard, 
						gender, 
						dob, 
						pob, 
						dateJoin, 
						division, 
						status, 
						active,
						authorCreated,
						authorId,
						createdAt
					}
					this.props.updateEmployee(dataUpdate)
					this.setState({
						id: '',
						firstName: '',
						lastName: '',
						age: '',
						address: '',
						idCard: '',
						gender: '',
						dob: '',
						pob: '',
						dateJoin: '',
						division: '',
						status: '',
						active: '',
						authorCreated: '',
						authorId: '',
						createdAt:''
					})
				}else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?')
				if(checkDel === true){
					this.props.deleteEmployee(id)
					this.setState({
						id: '',
						firstName: '',
						lastName: '',
						age: '',
						address: '',
						idCard: '',
						gender: '',
						dob: '',
						pob: '',
						dateJoin: '',
						division: '',
						status: '',
						active: '',
						authorCreated: '',
						authorId: '',
						createdAt:''
					})
				}else{
					return null
				}
				break;

			case 'RESET':
				this.setState({
					id: '',
					firstName: '',
					lastName: '',
					age: '',
					address: '',
					idCard: '',
					gender: '',
					dob: '',
					pob: '',
					dateJoin: '',
					division: '',
					status: '',
					active: '',
					authorCreated: '',
					authorId: '',
					createdAt:''
				})
				break;

			default:
				return null
		}
	}

	render(){
		const { dataRoutes } = this.props
		const {  loading, id , firstName, lastName, age, address, idCard, gender, dob, pob, dateJoin, division, status, active} = this.state
		const value = { id , firstName, lastName, age, address, idCard, gender, dob, pob, dateJoin, division, status, active }
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className="DataEmployee">
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
					        	<BreadcrumbItem active>
					        		<a> Data Employee </a>
					        	</BreadcrumbItem>
					      	</Breadcrumb>
					      	<Card_B brCard='mb-3' tlCard='Data'>
					      		<EmployeeTable 
									dataRoutes={dataRoutes}
									formAction={this.formAction	}
								/>
					      	</Card_B>
						</Col_B>
						<ColCard lgCol='12' mdCol='12' smCol='12' colClass='' brCard='mb-3' tlCard='Form'>
							<EmployeeForm 
								value={value}
								dataRoutes={dataRoutes}
								onChange={this.onChange}
								formAction={this.formAction}
							/>
						</ColCard>
					</ContainerFluidRow>
				</div>
			)
			
		}else{
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
		inputEmployee: (dataInput) => dispatch(inputEmployee(dataInput)),
		deleteEmployee: (id) => dispatch(deleteEmployee(id)),
		updateEmployee: (dataUpdate) => dispatch(updateEmployee(dataUpdate))
	}
	
}

export default connect(null, mapDispatchToProps)(DataEmployee)