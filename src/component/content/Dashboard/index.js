import React, {Component} from 'react'
//Assets
import Profile from './../../../assets/images/default.png'
import Loading from './../../../assets/images/Loading.png'
//Tools
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//Actions
import {createInformation} from './../../../store/actions/informationActions'
//Component
import { CreateInformation } from './CreateInformation'
import { InformationSummary } from './InformationSummary'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//reactstrap
import { Row, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap'
//grid 
import { ContainerFluidRow, ColCard, Col_B, Card_B } from './../../grid/Custome-Grid'
class Dashboard extends Component{
	state = {
		isExpanded: false,
		title: '',
		date: '',
		content: ''
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				isExpanded: !this.state.isExpanded
			})
		}, 3000)
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	formAction = (mode, data) => {
		const { title, date, content } = this.state
		switch(mode){
			case 'SAVE':
				const dataInput = { title, date, content }
				this.props.createInformation(dataInput)
				this.setState({
					title: '',
					date: '',
					content: ''
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { isExpanded, title, date, content } = this.state
		const { dataRoutes } = this.props 
		const value = { isExpanded, title, date, content }
		const config = {
			PostingPlace: dataRoutes.firebase.profile.level === 1 ? 
				<Card_B brCard='mb-3' tlCard='Posting'>
					<CreateInformation 
						value={value}
						onChange={this.onChange}
						formAction={this.formAction}
					/>
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

const mapDispatchToProps = (dispatch) => {
	return{
		createInformation: (dataInput) => dispatch(createInformation(dataInput))
	}
}

export default connect(null, mapDispatchToProps)(Dashboard)