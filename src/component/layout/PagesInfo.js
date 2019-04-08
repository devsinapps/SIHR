import React from 'react'
//Assets
import imgProfile from './../../assets/images/default.png'
//Actions
import {signOut} from './../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'
import moment from 'moment'
//Grid
import { ContainerFluidRow, Col_B, ColCard, Multipage } from './../grid/Custome-Grid'
//Reactstrap
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBCardTitle, MDBIcon } from 'mdbreact'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PagesInfo extends React.Component{
	SliderPages = () => {
		const PagesMenu = document.querySelector('.Pages-Menu');
		const PagesToggle = document.querySelector('.Pages-Toggle');
			  PagesMenu.classList.toggle('Pages-Menu-Slider');
			  PagesToggle.classList.toggle('Pages-Toggle-Slider');
	}
	render(){
		const { dataRoutes } = this.props
		return(
			<div className='PagesInfo'>
				<div className='Pages-Toggle' onClick={this.SliderPages}>

				</div>
				<div className='Pages-Menu'>
					<ContainerFluidRow>
						<ColCard lgCol='3' mdCol='3' smCol='12' brCard='mb-3' tlCard=''>	
							<img src={imgProfile} alt='imgProfile' />
						</ColCard>
						<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard=''>
							<MDBCardTitle> {dataRoutes.firebase.profile.firstName + ' ' + dataRoutes.firebase.profile.lastName} </MDBCardTitle>
							<Multipage title1='Email' title2='Level' title3='Join Date'>
								<p> <MDBIcon icon="envelope" /> {dataRoutes.firebase.profile.email} </p>
								<p> <MDBIcon icon="chalkboard-teacher" /> {dataRoutes.firebase.profile.level} </p>
								<p> <MDBIcon icon="calendar-check" /> {moment(dataRoutes.firebase.profile.joinDate && dataRoutes.firebase.profile.joinDate.toDate().toString()).format("MMM Do YY")} </p>
							</Multipage>
						</ColCard>
						<ColCard lgCol='3' mdCol='3' smCol='12' brCard='mb-3' tlCard=''>
							<ul>
								<li> 
									<MDBBtn color='info' size='sm'  onClick={this.props.signOut}> Sign Out </MDBBtn>
								</li>
							</ul>
						</ColCard>
					</ContainerFluidRow> 
					<ContainerFluidRow>
						<Col_B lgCol='12' mdCol='12' smCol='12'>	
							<Breadcrumb>
						        <BreadcrumbItem active>
						        	<a> About Developer </a>
						        </BreadcrumbItem>
					        </Breadcrumb>
					        <ul>
					        	<li> 
					        		<a href="https://www.instagram.com/sierraeska/" target="__blank">
					        			<FontAwesomeIcon icon={['fab', 'instagram']} />
					        		</a>
					        	</li>
					        	<li> 
					        		<a href='https://www.facebook.com/sandy.kurniawan.9028' target="__blank">
					        			<FontAwesomeIcon icon={['fab', 'facebook']} />
					        		</a>
					        	</li>
					        </ul>
					    </Col_B>
					</ContainerFluidRow>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}


export default connect(null, mapDispatchToProps)(PagesInfo)
