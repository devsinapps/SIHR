import React, {Component} from 'react'
import CreateInformation from './CreateInformation'
import InformationSummary from './InformationSummary'
import { Redirect } from 'react-router-dom'
import Profile from './../../../assets/images/default.png'
import Loading from './../../../assets/images/Loading.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Style
import { Row, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap'
//grid 
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'
class Dashboard extends Component{
	state = {
		isExpanded: false
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				isExpanded: !this.state.isExpanded
			})
		}, 3000)
	}
	render(){
		const { isExpanded } = this.state
		const { dataRoutes } = this.props 
		const config = {
			PostingPlace: dataRoutes.firebase.profile.level === 1 ? 
				<Card_B brCard='mb-3' tlCard='Posting'>
					<CreateInformation />
				</Card_B>
				:
				null
				
		}

		if(dataRoutes.firebase.auth.uid == null) return <Redirect to='/signin' />;
		if(isExpanded === false){
			return(
				<div className="Loading text-center">
					<img src={Loading} alt="loading"/>
				</div>
			)
		}else{
			return(
				<div className='Dashboard'>
					<ContainerFluidRow roClass=''>
						<Col_B lgCol='12' mdCol='12' smCol='12'>
							<Breadcrumb>
						        <BreadcrumbItem active>
						        	<a> Dashboard </a>
						        </BreadcrumbItem>
					        </Breadcrumb>
    						<Row>
    							<Col_B lgCol='4' mdCol='4' smCol='4'>
    								<Card_B brCard='mb-3' tlCard=''>
    									<div className="ProfilePict text-center">
											<img src={Profile} alt="profile"/>
										</div>
										<ul>
											<li> 
												<FontAwesomeIcon icon="user-tag" />
												<span> {dataRoutes.firebase.profile.firstName + ' ' + dataRoutes.firebase.profile.lastName}  </span>
											</li>
											<li> 
												<FontAwesomeIcon icon="envelope" />
												<span> {dataRoutes.firebase.profile.email}  </span>
											</li>
										</ul>
    								</Card_B>
    								{config.PostingPlace}
    							</Col_B>
								<Col_B lgCol='8' mdCol='8' smCol='8'>
									<Row>
										<ColCard lgCol='12' mdCol='12' smCol='12' colClas='' brCard='mb-3' tlCard='Information'>
										</ColCard>
										<Col_B lgCol='12' mdCol='12' smCol='12'>
											{dataRoutes.firestore.ordered.information && dataRoutes.firestore.ordered.information.map((info)=>{
												return(
													<InformationSummary key={info.id} info={info}/>
												)
												})
											}
										</Col_B>
									</Row>
								</Col_B>
							</Row>
						</Col_B>
					</ContainerFluidRow>
				</div>
			)
		}
		
	}
}

export default Dashboard