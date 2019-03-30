import React from 'react'
import Loading from './../../../assets/images/Loading.png'
//Component
import FormUser from './FormUser'
import TableUser from './TableUser'
//Actions
import { updateUser, deleteUser } from './../../../store/actions/usersActions'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap' 
//Grid 
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'

class DataUsers extends React.Component{
	state = {
		loading: true,
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		level: '',
		joinDate: ''
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

	formAction = (mode, dataUser) => {
		const { id, firstName, lastName, nickName, initials, email, password, division, level, joinDate } = this.state
		switch(mode){
			case 'GETUSER':
				this.setState({
					id: dataUser.id,
					firstName: dataUser.firstName,
					lastName: dataUser.lastName,
					email: dataUser.email,
					password: dataUser.password,
					level: dataUser.level,
					joinDate: dataUser.joinDate
				})
				break ;

			case 'UPDATE':
				const dataUsers = {
					id, firstName, lastName, nickName, initials, email, password, division, level, joinDate
				}

				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					this.props.updateUser(dataUsers)
					this.setState({
						id: '',
						firstName: '',
						lastName: '',
						email: '',
						password: '',
						level: '',
						joinDate: ''
					})
				}else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?')
				if(checkDel === true){
					this.props.deleteUser(id)
					this.setState({
						id: '',
						firstName: '',
						lastName: '',
						email: '',
						password: '',
						level: '',
						joinDate: ''
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
					email: '',
					password: '',
					level: '',
					joinDate: ''
				})
				break;

			default:
				return null
		}
		
	}
	render(){
		const { dataRoutes } = this.props
		const { loading, id, firstName, lastName, email, password, level, joinDate } = this.state
		const value = { id, firstName, lastName, email, password, level, joinDate }
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/' />;
		if(loading != true){
			return(
				<div className="DataUsers">
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
						       <BreadcrumbItem active>
						       	<a>Data Users</a>
						       </BreadcrumbItem>
						    </Breadcrumb>
						    <Card_B brCard='mb-3' tlCard='Data Table'>
					    		<TableUser 
						    		value={value}
						    		dataRoutes={dataRoutes}
						    		onChange={this.onChange}
						    		formAction={this.formAction}
						    	/>
						    </Card_B>
						</Col_B>
						<ColCard lgCol='12' mdCol='12' smCol='12' colClass='' brCard='mb-3' tlCard='Form'>
							<FormUser 
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
				<div className='Loading text-center'>
					<img src={Loading} />
				</div>
			)
		}
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateUser: (dataUsers) =>  dispatch(updateUser(dataUsers)),
		deleteUser: (id) => dispatch(deleteUser(id))
	}
}


export default connect(null, mapDispatchToProps)(DataUsers)