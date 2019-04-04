import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//mdbreact
import { MDBCollapse } from 'mdbreact'
class SideNav extends React.Component{
	state = {
		collapseID: '',
		isExpanded: false
	}

	toggleCollapse = (collapseID) => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : '',
			isExpanded: !this.state.isExpanded
		}))
	}
	render(){
		const { isExpanded } = this.state
		const { level } = this.props
		const config = {
			active: isExpanded ? 'active' : ''
		}
		return(
			<div className='SideNav'>
				<div className='LeftSide'>
					<div className='_Header'>
						<h1> SIHR </h1>
					</div>
					<div className='_mainMenu'>
						<ul> 
							<li className='active'>  
								<FontAwesomeIcon icon="tachometer-alt" />
								<NavLink to='/'> Dashboard </NavLink> 
							</li>
							<div className='Accordion'>
								<li onClick={this.toggleCollapse('Menu')}>
									<FontAwesomeIcon icon='book-open' />
									<a className='titleDropdown'> Menu </a> 
									<FontAwesomeIcon icon="angle-right" className='dropdownIcon'/>
								</li>
								<MDBCollapse id='Menu' className='AccordionMenu' isOpen={this.state.collapseID}>
									<ul>
										<li> 
											<FontAwesomeIcon icon="circle-notch"/>
											<Link to='/kanban'> KanBan </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/requests'> Requests </Link>
										</li>
									</ul>
								</MDBCollapse>
								<li onClick={this.toggleCollapse('hrMenu')}>
									<FontAwesomeIcon icon='book-open' />
									<a className='titleDropdown'> HR Menu </a> 
									<FontAwesomeIcon icon="angle-right" className='dropdownIcon'/>
								</li>
								<MDBCollapse id='hrMenu' className='AccordionMenu' isOpen={this.state.collapseID}>
									<ul>
										<li> 
											<FontAwesomeIcon icon="circle-notch"/>
											<Link to='/jobsopening'> Jobs Opening </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/candidates'> Candidates </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/interviews'> Interviews </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/task'> Task </Link>
										</li>
									</ul>
								</MDBCollapse>
								<li onClick={this.toggleCollapse('adminMenu')}>
									<FontAwesomeIcon icon='book-open' />
									<a className='titleDropdown'> Admin Menu </a> 
									<FontAwesomeIcon icon="angle-right" className='dropdownIcon'/>
								</li>
								<MDBCollapse id='adminMenu' className='AccordionMenu' isOpen={this.state.collapseID}>
									<ul>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/dataemployee'> Data Employee </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/datausers'> Data Users </Link>
										</li>
										<li> 
											<FontAwesomeIcon icon="circle-notch" />
											<Link to='/downloadrequests'> Data Requests </Link>
										</li>
									</ul>
								</MDBCollapse>
							</div>
						</ul>
					</div>
				</div>
				<div className='RightSide'>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		level: state.firebase.profile.level
	}
}

export default connect(mapStateToProps)(SideNav)


