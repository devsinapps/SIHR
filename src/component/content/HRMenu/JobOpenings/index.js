import React from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Action
import { inputJO, deleteJO, updateJO } from './../../../../store/actions/JOActions'
//Tools
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { JOTable } from './JOTable'
import { JOForm } from './JOForm'
//mdbreact
import { ToastContainer, toast } from 'mdbreact'
class JobOpenings extends React.Component{
	state = {
		loading:true,
		getCity: [],
		id: '',
		postingTitle: '',
		accountManager: '',
		dateOpened: '',
		targetDate: '',
		jobType: '',
		jobStatus: '',
		country: '',
		city: '',
		stateProvince: '',
		zip: '',
		experience: '',
		skill: '',
		salary: ''
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
			toast.error("Select Data First", {
	          autoClose: 3000
	        });
	        break;
		}
	}

	formAction = (mode, data) => {
		const { id, postingTitle, accountManager, dateOpened, targetDate, jobType, jobStatus, country, city, stateProvince, zip, experience, skill, salary } = this.state
		const parseSalary = parseInt(salary)
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
					postingTitle: data.postingTitle,
					accountManager: data.accountManager,
					dateOpened: data.dateOpened,
					targetDate: data.targetDate,
					jobType: data.jobType,
					jobStatus: data.jobStatus,
					country: data.country,
					city: data.city,
					stateProvince: data.stateProvince,
					zip: data.zip,
					experience: data.experience,
					skill: data.skill,
					salary: data.salary
				})
				break;

			case 'SAVE':
				if(	postingTitle.length < 1 || 
				   	accountManager.length < 1 || 
					dateOpened.length < 1 || 
					targetDate.length < 1 || 
					jobType.length < 1 || 
					jobStatus.length < 1 || 
					country.length < 1 || 
					city.length < 1 || 
					stateProvince.length < 1 || 
					zip.length < 1 || 
					experience.length < 1 || 
					skill.length < 1 || 
					salary.length < 1){
					this.notify('formEmpty')
				}else{
					const dataInput = {
						postingTitle,
						accountManager,
						dateOpened,
						targetDate,
						jobType,
						jobStatus,
						country,
						city,
						stateProvince,
						parseZip,
						experience,
						skill,
						parseSalary
					}
					this.props.inputJO(dataInput)
					this.setState({
						postingTitle: '',
						accountManager: '',
						dateOpened: '',
						targetDate: '',
						jobType: '',
						jobStatus: '',
						country: '',
						city: '',
						stateProvince: '',
						zip: '',
						experience: '',
						skill: '',
						salary: ''
					})
				}
				break;

			case 'UPDATE':
				if( id.length < 1 ||	
					postingTitle.length < 1 || 
				   	accountManager.length < 1 || 
					dateOpened.length < 1 || 
					targetDate.length < 1 || 
					jobType.length < 1 || 
					jobStatus.length < 1 || 
					country.length < 1 || 
					city.length < 1 || 
					stateProvince.length < 1 || 
					zip.length < 1 || 
					experience.length < 1 || 
					skill.length < 1 || 
					salary.length < 1){
					this.notify('selectFirst')
				}else{
					const checkUpd = window.confirm('Update?');
					if(checkUpd === true){
						const dataUpdate = {
							id,
							postingTitle,
							accountManager,
							dateOpened,
							targetDate,
							jobType,
							jobStatus,
							country,
							city,
							stateProvince,
							parseZip,
							experience,
							skill,
							parseSalary
						}
						this.props.updateJO(dataUpdate)
						this.setState({
							id: '',
							postingTitle: '',
							accountManager: '',
							dateOpened: '',
							targetDate: '',
							jobType: '',
							jobStatus: '',
							country: '',
							city: '',
							stateProvince: '',
							zip: '',
							experience: '',
							skill: '',
							salary: ''
						})
					}
					else{
						return null
					}
				}
				break;

			case 'DELETE':
				if( id.length < 1 ||	
					postingTitle.length < 1 || 
				   	accountManager.length < 1 || 
					dateOpened.length < 1 || 
					targetDate.length < 1 || 
					jobType.length < 1 || 
					jobStatus.length < 1 || 
					country.length < 1 || 
					city.length < 1 || 
					stateProvince.length < 1 || 
					zip.length < 1 || 
					experience.length < 1 || 
					skill.length < 1 || 
					salary.length < 1){
					this.notify('selectFirst')
				}else{
					const checkDel = window.confirm('Delete?');
					if(checkDel === true){
						this.props.deleteJO(id)
						this.setState({
							id: '',
							postingTitle: '',
							accountManager: '',
							dateOpened: '',
							targetDate: '',
							jobType: '',
							jobStatus: '',
							country: '',
							city: '',
							stateProvince: '',
							zip: '',
							experience: '',
							skill: '',
							salary: ''
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
					postingTitle: '',
					accountManager: '',
					dateOpened: '',
					targetDate: '',
					jobType: '',
					jobStatus: '',
					country: '',
					city: '',
					stateProvince: '',
					zip: '',
					experience: '',
					skill: '',
					salary: ''
				})
				break;

		}
	}

	render(){
		const { loading } = this.state
		const { getCity, postingTitle,accountManager,dateOpened,targetDate,jobType,jobStatus,country,city,stateProvince,zip,experience,skill,salary } = this.state
		const { dataRoutes } = this.props 
		const value = { getCity, postingTitle,accountManager,dateOpened,targetDate,jobType,jobStatus,country,city,stateProvince,zip,experience,skill,salary };
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='JobOpenings'>
					<ContainerFluidRow>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Job Openings'>
							<JOTable 
								dataRoutes={dataRoutes}
								formAction={this.formAction}
							/>
						</Collapsible>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Job Openings'>
							<JOForm 
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
		inputJO: (dataInput) => dispatch(inputJO(dataInput)),
		deleteJO: (id) => dispatch(deleteJO(id)),
		updateJO: (dataUpdate) => dispatch(updateJO(dataUpdate))
	}
}

export default connect(null, mapDispatchToProps)(JobOpenings)