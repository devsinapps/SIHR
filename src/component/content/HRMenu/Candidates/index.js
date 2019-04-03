import React from 'react'
//Assets
import Loading from './../../../../assets/images/Loading.png'
//Tools
import { Redirect } from 'react-router-dom'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { CForm } from './CandidatesForm'
import { CandidatesTable } from './CandidatesTable'
class Candidates extends React.Component{
	state = {
		loading:true
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		},3000)
	}
	render(){
		const { loading } = this.state
		const { dataRoutes } = this.props 
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(loading != true){
			return(
				<div className='Candidates'>
					<ContainerFluidRow>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Candidates'>
							<CandidatesTable />
						</Collapsible>
						<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Candidate'>
							<CForm />
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

export default Candidates