import React from 'react'
//assets
import Loading from './../../assets/images/Loading.png'
//actions
import { signIn } from './../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
//Config
import firebase from './../../config/fbConfig'
//grid
import { ContainerRow, ColCard } from './../grid/Custome-Grid'
//Reactstrap
import { Form, FormGroup } from 'reactstrap'
//MDBReact
import { MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
//mdbreact
import { ToastContainer, toast } from 'mdbreact'
class SignIn extends React.Component{
	state = {
		loading: false,
		email: '',
		password: '',
		isExpanded: false,
		modal: false,
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	notify = (type) => {
		switch(type){
		   	case "emailNotValid":
				toast.error("Email Invalid", {
		          autoClose: 3000
		        });
		        break;

		    case 'userError':
		    	toast.error("Username or Password Wrong!!", {
		          autoClose: 3000
		        });
		        break;

		}
	}
	
	formAction = (mode) => {
		const { email, password } = this.state
		switch(mode){
			case 'ICON-PASSWORD':
				this.setState({
					isExpanded: !this.state.isExpanded
				})
				break;

			case 'LOGIN':
				const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!regex.test(email)){
					this.notify('emailNotValid')
				}else{ 
					const dataUser = {
						email, 
						password
					}
					this.props.signIn(dataUser)
				}
				break;

			case 'MODAL':
				this.setState({
					modal: !this.state.modal
				})

			default:
				return null
		}
	}
	render(){
		const { loading, isExpanded } = this.state
		const { dataRoutes } = this.props
		const config = {
			typePassword: isExpanded == false ? 'password' : 'text',
			iconEye: isExpanded == false ? 'eye-slash' : 'eye'
		}
		if(dataRoutes.firebase.auth.uid != null) return <Redirect to='/' />;
		if(loading === !true){
			return(
				<div className="SignIn">
					<ContainerRow rowClass='justify-content-center'>
						<ColCard lgCol='5' mdCol='8' smCol='10' colClass='mx-auto' brCard='mb-3' tlCard=''>
							<Form>
							    <p className="h4 text-center mb-4">Sign in</p>
								<FormGroup>
									<MDBInput 
										id="email"
										label="Your e-mail" 
										size='md'
										icon="user"
										type="email" 
					                    group
					                    validate
					                    error="wrong"
					                    success="right"
										onChange={this.onChange}
									/>	
								</FormGroup>
								<FormGroup>
									<MDBInput 
										id="password"
										label="Your password" 
										type={config.typePassword}
										onChange={this.onChange}
										size='md'
										icon="lock"
		                				group
		                				validate
									/>	
									<span className='EyePassword' onClick={()=>this.formAction('ICON-PASSWORD')}>
										<FontAwesomeIcon icon={config.iconEye} />
									</span>
								</FormGroup>
								<FormGroup className='text-center'>
									<MDBBtn color='primary' onClick={()=>this.formAction('LOGIN')}> sign in </MDBBtn>
								</FormGroup>
								<br />
								<div className='text-center'>
									<p> Dont have account ? <Link to="/signup"> Sign Up </Link> </p>
								</div>
							</Form>
							<span onClick={()=>this.formAction('MODAL')} className='info'> <FontAwesomeIcon icon='user-cog' /> </span>
							<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
						        <MDBModalHeader toggle={this.toggle}>User Administrator</MDBModalHeader>
						        <MDBModalBody>
						          <p> Username: superadmin@admin.com </p>
						          <p> Password: superadmin </p>
						        </MDBModalBody>
						        <MDBModalFooter className='text-center'>
						          <MDBBtn color="primary" onClick={()=>this.formAction('MODAL')}>Close</MDBBtn>
						        </MDBModalFooter>
					     	</MDBModal>
					     	<ToastContainer
					          hideProgressBar={true}
					          newestOnTop={true}
					          autoClose={5000}
					        />
						</ColCard>
					</ContainerRow>
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
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(null, mapDispatchToProps)(SignIn)