import React from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Tools
import { Redirect } from 'react-router-dom'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { JOTable } from './JOTable'
import { JOForm } from './JOForm'

class JobOpenings extends React.Component{
	state = {
		loading:true,
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

	formAction = (mode, data) => {
		const { id, postingTitle, accountManager, dateOpened, targetDate, jobType, jobStatus, country, city, stateProvince, zip, experience, skill, salary } = this.state
		switch(mode){
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
					zip,
					experience,
					skill,
					salary
				}
				break;

			case 'UPDATE':
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
					zip,
					experience,
					skill,
					salary
				}
				break;

			case 'DELETE':
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
		const { dataRoutes } = this.props 
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='JobOpenings'>
					<ContainerFluidRow>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Job Openings'>
							<JOTable />
						</Collapsible>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Form Job Openings'>
							<JOForm 
								onChange={this.onChange}
								formAction={this.formAction}
							/>
						</Collapsible>
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

export default JobOpenings