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
						<Collapsible lgCol='12' mdCol='12' smCol='12' tlCard='Collapsible' brCard='mb-3'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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