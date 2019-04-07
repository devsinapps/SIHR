import React from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Action
import { inputC, deleteC, updateC } from './../../../../store/actions/CandidateActions'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { CForm } from './CandidatesForm'
import { CandidatesTable } from './CandidatesTable'
//mdbreact
import { ToastContainer, toast } from 'mdbreact'

const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class Candidates extends React.Component{
	state = {
		loading:true,
		getCity: [],
		id: '',
		email: '',
		firstname: '',
		phone: '',
		lastname: '',
		website: '',
		mobile: '',
		secondaryEmail: '',
		fax: '',
		street: '',
		zip: '',
		city: '',
		stateProvince: '',
		country: '',
		experience: '',
		highQualification: '',
		jobTitle: '',
		currentEmployer: '',
		salary: '',
		currentSalary: '',
		skill: '',
		additionalInfo: ''
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

	onChangeNumber = (e) => {
		if(e.target.validity.valid){
			this.setState({
				[e.target.id]: e.target.value
			})
		}else if(e.target.value === '' || e.target.value === '-'){
			this.setState({
				[e.target.id]: e.target.value
			})
		}
	}

	notify = (type) => {
		switch(type){
			case "formEmpty":
				toast.error("Form Can't Empty", {
		          autoClose: 3000
		        });
		        break;

			case "selectFirst":
				toast.error("Please Select Data", {
		          autoClose: 3000
		        });
		        break;

		   	case "emailNotValid":
				toast.error("Email Not Valid", {
		          autoClose: 3000
		        });
		        break;

		}
	}

	formAction = (mode, data) => {
		const { id,	email, firstname, phone, lastname, website, mobile,	secondaryEmail,	fax, street, zip, city, stateProvince, country, experience,	highQualification,	jobTitle, currentEmployer, salary, currentSalary, skill, additionalInfo } = this.state
		const parseSalary = parseInt(salary)
		const parseCSalary = parseInt(currentSalary)
		const parseZip = parseInt(zip)
		switch(mode){
			case 'GETCITY':
				this.setState({
					getCity: data.states
				})
				break;

			case 'GETDATA':
				this.setState({
					id: data.id,
					email: data.email,
					firstname: data.firstname,
					phone: data.phone,
					lastname: data.lastname,
					website: data.website,
					mobile: data.mobile,
					secondaryEmail: data.secondaryEmail,
					fax: data.fax,
					street: data.street,
					zip: data.zip,
					city: data.city,
					stateProvince: data.stateProvince,
					country: data.country,
					experience: data.experience,
					highQualification: data.highQualification,
					jobTitle: data.jobTitle,
					currentEmployer: data.currentEmployer,
					salary: data.salary,
					currentSalary: data.currentSalary,
					skill: data.skill,
					additionalInfo: data.additionalInfo
				})
				break;

			case 'SAVE':
				if(	email.length < 1 ||
					firstname.length < 1 ||
					phone.length < 1 ||
					lastname.length < 1 ||
					website.length < 1 ||
					mobile.length < 1 ||
					secondaryEmail.length < 1 ||
					fax.length < 1 ||
					street.length < 1 ||
					zip.length < 1 ||
					city.length < 1 ||
					stateProvince.length < 1 ||
					country.length < 1 ||
					experience.length < 1 ||
					highQualification.length < 1 ||
					jobTitle.length < 1 ||
					currentEmployer.length < 1 ||
					salary.length < 1 ||
					currentSalary.length < 1 ||
					skill.length < 1 ||
					additionalInfo.length < 1){
					this.notify('formEmpty')
				}else if(!regex.test(email) || !regex.test(secondaryEmail)) {
					this.notify('emailNotValid')
				}else{
					const dataInput = {
						email,
						firstname,
						phone,
						lastname,
						website,
						mobile,
						secondaryEmail,
						fax,
						street,
						zip,
						parseZip,
						stateProvince,
						country,
						experience,
						highQualification,
						jobTitle,
						currentEmployer,
						parseSalary,
						parseCSalary,
						skill,
						additionalInfo
					}
					this.props.inputC(dataInput)
					this.setState({
						email: '',
						firstname: '',
						phone: '',
						lastname: '',
						website: '',
						mobile: '',
						secondaryEmail: '',
						fax: '',
						street: '',
						zip: '',
						city: '',
						stateProvince: '',
						country: '',
						experience: '',
						highQualification: '',
						jobTitle: '',
						currentEmployer: '',
						salary: '',
						currentSalary: '',
						skill: '',
						additionalInfo: ''
					})
				}
				
				break;

			case 'UPDATE':
				if(	id.length < 1 ||
					email.length < 1 ||
					firstname.length < 1 ||
					phone.length < 1 ||
					lastname.length < 1 ||
					website.length < 1 ||
					mobile.length < 1 ||
					secondaryEmail.length < 1 ||
					fax.length < 1 ||
					street.length < 1 ||
					zip.length < 1 ||
					city.length < 1 ||
					stateProvince.length < 1 ||
					country.length < 1 ||
					experience.length < 1 ||
					highQualification.length < 1 ||
					jobTitle.length < 1 ||
					currentEmployer.length < 1 ||
					salary.length < 1 ||
					currentSalary.length < 1 ||
					skill.length < 1 ||
					additionalInfo.length < 1){
					this.notify('selectFirst')
				}else if(!regex.test(email)){
					this.notify('emailNotValid')
				}else{
					const checkUpd = window.confirm('Update?');
					if(checkUpd === true){
						const dataUpdate = {
							id,
							email,
							firstname,
							phone,
							lastname,
							website,
							mobile,
							secondaryEmail,
							fax,
							street,
							parseZip,
							city,
							stateProvince,
							country,
							experience,
							highQualification,
							jobTitle,
							currentEmployer,
							parseSalary,
							parseCSalary,
							skill,
							additionalInfo
						}
						this.props.updateC(dataUpdate)
						this.setState({
							id: '',
							email: '',
							firstname: '',
							phone: '',
							lastname: '',
							website: '',
							mobile: '',
							secondaryEmail: '',
							fax: '',
							street: '',
							zip: '',
							city: '',
							stateProvince: '',
							country: '',
							experience: '',
							highQualification: '',
							jobTitle: '',
							currentEmployer: '',
							salary: '',
							currentSalary: '',
							skill: '',
							additionalInfo: ''
						})
					}
					else{
						return null
					}	
				}
				break;

			case 'DELETE':
				if(	id.length < 1 ||
					email.length < 1 ||
					firstname.length < 1 ||
					phone.length < 1 ||
					lastname.length < 1 ||
					website.length < 1 ||
					mobile.length < 1 ||
					secondaryEmail.length < 1 ||
					fax.length < 1 ||
					street.length < 1 ||
					zip.length < 1 ||
					city.length < 1 ||
					stateProvince.length < 1 ||
					country.length < 1 ||
					experience.length < 1 ||
					highQualification.length < 1 ||
					jobTitle.length < 1 ||
					currentEmployer.length < 1 ||
					salary.length < 1 ||
					currentSalary.length < 1 ||
					skill.length < 1 ||
					additionalInfo.length < 1){
					this.notify('selectFirst')
				}
				else{
					const checkDel = window.confirm('Delete?')
					if(checkDel === true){
						this.props.deleteC(id)
						this.setState({
							id: '',
							email: '',
							firstname: '',
							phone: '',
							lastname: '',
							website: '',
							mobile: '',
							secondaryEmail: '',
							fax: '',
							street: '',
							zip: '',
							city: '',
							stateProvince: '',
							country: '',
							experience: '',
							highQualification: '',
							jobTitle: '',
							currentEmployer: '',
							salary: '',
							currentSalary: '',
							skill: '',
							additionalInfo: ''
						})
					}
					else{
						return null
					}
				}
				break;

			case 'RESET':
				this.setState({
					id: '',
					email: '',
					firstname: '',
					phone: '',
					lastname: '',
					website: '',
					mobile: '',
					secondaryEmail: '',
					fax: '',
					street: '',
					zip: '',
					city: '',
					stateProvince: '',
					country: '',
					experience: '',
					highQualification: '',
					jobTitle: '',
					currentEmployer: '',
					salary: '',
					currentSalary: '',
					skill: '',
					additionalInfo: ''
				})
				break;

			default:
				return null

		}
	}
	render(){
		const { loading } = this.state
		const { dataRoutes } = this.props 
		const { getCity, id,	email,	firstname,	phone,	lastname,	website,	mobile,	secondaryEmail,	fax,	street,	zip,	city,	stateProvince,	country,	experience,	highQualification,	jobTitle,	currentEmployer,	salary,	currentSalary,	skill,	additionalInfo } = this.state
		const value = { getCity, id,	email,	firstname,	phone,	lastname,	website,	mobile,	secondaryEmail,	fax,	street,	zip,	city,	stateProvince,	country,	experience,	highQualification,	jobTitle,	currentEmployer,	salary,	currentSalary,	skill,	additionalInfo }
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='Candidates'>
					<ContainerFluidRow>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Candidates'>
							<CandidatesTable 
								dataRoutes={dataRoutes}
								formAction={this.formAction}
							/>
						</Collapsible>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Candidate'>
							<CForm 
								value={value}
								dataRoutes={dataRoutes}
								onChange={this.onChange}
								onChangeNumber={this.onChangeNumber}
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
		inputC: (dataInput) => dispatch(inputC(dataInput)),
		deleteC: (id) => dispatch(deleteC(id)),
		updateC: (dataUpdate) => dispatch(updateC(dataUpdate))
	}
}

export default connect(null, mapDispatchToProps)(Candidates)