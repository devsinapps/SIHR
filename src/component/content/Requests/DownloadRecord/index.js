import React from 'react'
import RequestsTable from './RequestsTable'
import Loading from './../../../../assets/images/Loading.png'
import { Redirect } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

//grid
import { ContainerFluidRow, Card_B, Col_B, Collapsible } from './../../../grid/Custome-Grid'

class RequestsRecord extends React.Component{
	state = {
		loading: true
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: !this.state.loading
			})
		}, 3000)
	}
	render(){
		const { loading } = this.state
		const { dataRoutes } = this.props
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/' />;
		if(loading != true){
			return(
				<div className="RequestsRecord">
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
								<BreadcrumbItem active> 
								   	<a> Record Requests </a> 
								</BreadcrumbItem>
							</Breadcrumb>
						</Col_B>
						<Collapsible lgCol='12' mdCol='12' smCol='12' tlCard='Data' brCard='mb-3'>
							<RequestsTable dataRoutes={dataRoutes}/>
						</Collapsible>
					</ContainerFluidRow>
				</div>
			)
		}
		else{
			return(
				<div className="Loading text-center">
					<img src={Loading} />
				</div>
			)
		}
	}
}

export default RequestsRecord