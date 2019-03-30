import React from 'react'
//Assets
import imgProfile from './../../assets/images/default.png'
//Tools
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navbar, Input } from 'reactstrap'

class TopNav extends React.Component{
	Slider = (e) => {
		const LeftSide = document.getElementsByClassName('LeftSide')[0];
		const TopNav = document.getElementsByClassName('TopNav')[0];
		const RightSide = document.getElementsByClassName('RightSide')[0];
		const Content = document.getElementsByClassName('Content')[0];
			  LeftSide.classList.toggle('LeftSide_Slider');
			  TopNav.classList.toggle('TopNav_Slider');
			  RightSide.classList.toggle('RightSide_Slider');
			  Content.classList.toggle('Content_Slider');
	}

	SliderPages = () => {
		const PagesMenu = document.querySelector('.Pages-Menu');
		const PagesToggle = document.querySelector('.Pages-Toggle');
			  PagesMenu.classList.toggle('Pages-Menu-Slider');
			  PagesToggle.classList.toggle('Pages-Toggle-Slider');
	}
	render(){
		const { dataRoutes } = this.props 
		return(
			<Navbar expand="md" className='TopNav'>
				<div className='Navbar-Left'>
					<ul>
						<li onClick={this.Slider}> <FontAwesomeIcon icon="bars" /> </li>
						<li>
							<div className="input-group">
							  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
						      <div className="input-group-prepend">
						        <span className="input-group-text" id="basic-addon">
						          <i className="fa fa-search prefix"></i>
						        </span>
						      </div>
						    </div>
						</li>
					</ul>
				</div>
				<div className='Navbar-Right'>
					<ul>
						<li> 
							<FontAwesomeIcon icon="envelope" />
						</li>
						<li> 
							<img src={imgProfile} alt='imgProfile' />
						</li>
						<li onClick={this.SliderPages}> 
							<span> {dataRoutes.firebase.profile.initials} </span>
						</li>		
					</ul>
				</div>
	 		</Navbar>
		)
	}
}

export default TopNav