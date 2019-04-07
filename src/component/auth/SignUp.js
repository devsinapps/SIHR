import React from 'react'
//assets
import Loading from './../../assets/images/Loading.png'
//actions
import { signUp } from './../../store/actions/authActions'
//Tools
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//grid
import { ContainerRow, ColCard } from './../grid/Custome-Grid'
//Reactstrap
import { Form, FormGroup } from 'reactstrap'
//MDBReact
import { MDBInput, MDBBtn, ToastContainer, toast } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SignUp extends React.Component{
	state = {
		firstName: '',
		lastName: '',
		email: '',
		checkMail: '',
		password: '',
		isExpanded: false,
		loading: false
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	notify = (type) => {
		switch(type){
			case "EmailNotConfirmed":
			toast.error('Email Not Confirmed', {
	          autoClose: 3000
	        });
	        break;

	        case "EmailInvalid":
	        toast.error('Email Invalid', {
	          autoClose: 3000
	        });
	        break;

	        case "PasswordToShort":
	        toast.error('Password ToShort', {
	          autoClose: 3000
	        });
	        break;

		}
	}


	formAction = (mode) => {
		const { firstName, lastName, email, checkMail, password } = this.state
		switch(mode){
			case 'ICON-PASSWORD':
				this.setState({
					isExpanded: !this.state.isExpanded
				})
				break;

			case 'REGISTER':
				const dataUser = {
					 firstName, 
					 lastName, 
					 email, 
					 password
				}
				const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(email !== checkMail){
					this.notify('EmailNotConfirmed')
				}else if(!regex.test(email)){
					this.notify('EmailInvalid')
				}else if(password.length < 6){
					this.notify('PasswordToShort')
				}else{
					this.props.signUp(dataUser)
					this.setState({
						loading: true
					})
				}
				break;

			default:
				return null
		}
	}

	render(){
		const { loading, firstName, lastName, email, checkMail, password } = this.state
		const { isExpanded } = this.state
		const { dataRoutes } = this.props
		const config = {
			typePassword: isExpanded ? 'text' : 'password' ,
			iconEye: isExpanded ?'eye' : 'eye-slash',
			enabled: firstName.length > 0 &&
					 lastName.length > 0 &&
					 email.length > 0 &
					 checkMail.length > 0 &&
					 password.length > 0
		}
		if(dataRoutes.firebase.auth.uid != null) return <Redirect to='/' />;
		if(loading != true){
			return(
				<div className="SignUp">
					<ContainerRow rowClass='justify-content-center'>
						<ColCard lgCol='5' mdCol='8' smCol='10' colClass='mx-auto' brCard='mb-3' tlCard=''>
						<Form>
							 <p className="h4 text-center mb-4">Sign Up</p>
							<FormGroup>
								<MDBInput 
									id="firstName"
									label="First name" 
									size='lg'
									outline size="md"
									icon="user"
									value={firstName}
									onChange={this.onChange}
								/>	
							</FormGroup>
							<FormGroup>
								<MDBInput 
									id="lastName"
									label="Last Name" 
									size='lg'
									outline size="md"
									icon="user"
									value={lastName}
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<MDBInput 
									id="email"
									label="Your email" 
									size='lg'
									outline size="md"
									icon='envelope'
									value={email}
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<MDBInput 
									id="checkMail"
									label="Confirm your email" 
									size='lg'
									onChange={this.onChange}
									outline size="md"
									value={checkMail}
									icon="exclamation-triangle"
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<MDBInput 
									id="password"
									type={config.typePassword}
									label="Your password" 
									size='lg'
									outline size="md"
									icon="lock"
									value={password}
									onChange={this.onChange}
								/>
								<span className='EyePassword' onClick={()=>this.formAction('ICON-PASSWORD')}>
									<FontAwesomeIcon icon={config.iconEye} />
								</span>
							</FormGroup>
							<div className='text-center'>
								<MDBBtn color='primary' onClick={()=>this.formAction('REGISTER')}  disabled={!config.enabled}> Sign Up </MDBBtn >
							</div>
							<br />
							<div className='text-center'>
								<p> Already have account ? <Link to="/signin"> Sign In </Link> </p>
							</div>
						</Form>
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
		signUp: (dataUser) => dispatch(signUp(dataUser))
	}
}

export default connect(null, mapDispatchToProps)(SignUp)