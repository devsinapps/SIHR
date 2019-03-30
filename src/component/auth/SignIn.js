import React from 'react'
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
class SignIn extends React.Component{
	state = {
		email: '',
		password: '',
		isExpanded: false,
		isSignedin: false,
		modal: false,
	}

	//Options Sign In Firebase
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false
		}
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				isSignedin: !!user
			})
			console.log(user)
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
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
				const dataUser = {
					email, 
					password
				}
				this.props.signIn(dataUser)
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
		const { isExpanded, isSignedin } = this.state
		const { dataRoutes } = this.props
		const config = {
			typePassword: isExpanded == false ? 'password' : 'text',
			iconEye: isExpanded == false ? 'eye-slash' : 'eye'
		}
		if(dataRoutes.firebase.auth.uid != null) return <Redirect to='/' />;
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
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(null, mapDispatchToProps)(SignIn)