import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SideNav extends React.Component{
	Slider = (e) => {
		const LeftSide = document.getElementsByClassName('LeftSide')[0];
		const TopNav = document.getElementsByClassName('TopNav')[0];
		const RightSide = document.getElementsByClassName('RightSide')[0];
		const Content = document.getElementsByClassName('Content')[0];
			  LeftSide.classList.toggle('LeftSide_Slider');
			  TopNav.classList.toggle('TopNav_Slider');
			  RightSide.classList.toggle('RightSide_Slider');
			  Content.classList.remove('Content_Slider');
	}
	render(){
		const { level } = this.props
		if(level == 1){
			return(
				<div className='SideNav'>
					<div className='LeftSide'>
						<div className='_Header'>
							<h1> SIHR </h1>
						</div>
						<div className='_mainMenu'>
							<ul> 
								<li> 
									<FontAwesomeIcon icon="tachometer-alt" />
									<Link to='/'> Dashboard </Link> 
								</li>
								<Dropdown title="Menu"  icon="book-open">
									<li> 
										<FontAwesomeIcon icon="circle-notch"/>
										<Link to='/kanban'> KanBan </Link>
									</li>
									<li> 
										<FontAwesomeIcon icon="circle-notch" />
										<Link to='/requests'> Requests </Link>
									</li>
								</Dropdown>
								<Dropdown title="Admin Menu" icon="book-reader">
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
								</Dropdown>
							</ul>
						</div>
					</div>
					<div className='RightSide' onClick={this.Slider}>
					</div>
				</div>
			)
		}else{
			return(
				<div className='SideNav'>
					<div className='LeftSide'>
						<div className='_Header'>
							<h1> SIHR </h1>
						</div>
						<div className='_mainMenu'>
							<ul> 
								<li> 
									<FontAwesomeIcon icon="tachometer-alt" />
									<Link to='/'> Dashboard </Link> 
								</li>
								<Dropdown title="Menu"  icon="book-open">
									<li> 
										<FontAwesomeIcon icon="circle-notch"/>
										<Link to='/kanban'> KanBan </Link>
									</li>
									<li> 
										<FontAwesomeIcon icon="circle-notch" />
										<Link to='/requests'> Requests </Link>
									</li>
								</Dropdown>
							</ul>
						</div>
					</div>
					<div className='RightSide' onClick={this.Slider}>
					</div>
				</div>
			)
		} 
		
	}
}

const mapStateToProps = (state) => {
	return{
		level: state.firebase.profile.level
	}
}

export default connect(mapStateToProps)(SideNav)

class Dropdown extends React.Component{
	state = {
		isClick: false
	}

	onClick = (e) => {
		this.setState({
			isClick: !this.state.isClick,
			height: this.refs.inner.clientHeight
		})
	}	
	render(){
		const { isClick, height } = this.state
		const { title, children, icon } = this.props
		const currentHeight = isClick ? height : 0;
		const currentActive = isClick ? 'active' : ' ';
		return(
			<div className={'Dropdown' + ' ' + currentActive}>
				<li onClick={this.onClick} className={currentActive}>
					<FontAwesomeIcon icon={icon} />
					<a> {title} </a> 
					<FontAwesomeIcon icon="angle-right" className='dropdownIcon'/>
				</li>
				<div className='DropdownMenu' style={{height: currentHeight+'px'}}>
					<div className="_Menu" ref="inner">
						<ul>
							{children}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}