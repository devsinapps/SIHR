import React from 'react'
import RequestsTable from './RequestsTable'
import Loading from './../../../../assets/images/Loading.png'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

//grid
import { ContainerFluidRow, Card_B, Col_B } from './../../../grid/Custome-Grid'
class RequestsRecord extends React.Component{
	render(){
		const { dataRoutes } = this.props
		const { requests, auth } = this.props
		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/' />;
		if(dataRoutes.firestore.ordered.requests){
			return(
				<div className="RequestsRecord">
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
								<BreadcrumbItem active> 
								   	<a> Record Requests </a> 
								</BreadcrumbItem>
							</Breadcrumb>
							<Card_B brCard='mb-3' tlCard='Data'>
								<RequestsTable dataRoutes={dataRoutes}/>
							</Card_B>
						</Col_B>
					</ContainerFluidRow>
				</div>
			)
		}else{
			return(
				<div className="Loading text-center">
					<img src={Loading} />
				</div>
			)
		}
		
	}
}

export default RequestsRecord