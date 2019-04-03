import React from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Reactstrap
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCollapse, } from 'mdbreact';
export const ContainerFluidRow = ({rowClass, children}) => {
	return(
		<MDBContainer fluid>
			<MDBRow className={rowClass}>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}

export const ContainerRow = ({rowClass, children}) => {
	return(
		<MDBContainer>
			<MDBRow className={rowClass}>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}



export const ColCard = ({lgCol, mdCol, smCol, brCard, tlCard, children}) => {
		const config = {
		viewHeader: tlCard === '' ? null : <MDBCardHeader> {tlCard} </MDBCardHeader>,
		viewBody: children === undefined ? null : <MDBCardBody> {children} </MDBCardBody>
	}
	return(
		<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
			<MDBCard className={brCard}>
				{config.viewHeader}
				{config.viewBody}
			</MDBCard>
		</MDBCol>
	)
}

export const Col_B = ({lgCol, mdCol, smCol, style, children}) => {
	return(
		<MDBCol lg={lgCol} md={mdCol} sm={smCol} style={style}>
			{children}
		</MDBCol>
	)
}

export const Card_B = ({brCard, tlCard, children}) => {
	const config = {
		viewHeader: tlCard === '' ? null : <MDBCardHeader> {tlCard} </MDBCardHeader>
	}
	return(
		<MDBCard className={brCard}>
			{config.viewHeader}
			<MDBCardBody>
				{children}
			</MDBCardBody>
		</MDBCard>
	)
}

export class Collapsible extends React.Component{
	state = {
		isExpanded: false,
		close: false
	}

	collapsible = (mode) => {
		switch(mode){
			case 'collapsible':
				this.setState({
					isExpanded: !this.state.isExpanded,
					height: this.refs.inner.clientHeight
				})
				break;

			case 'close':
				this.setState({
					close: !this.state.close
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { isExpanded, close, height } = this.state
		const { lgCol, mdCol, smCol, brCard, tlCard, children } = this.props
		const statement = {
			click: children === undefined ? null : this.collapsible,
			collapsibleStyle: {
				height: isExpanded ? '0' : height + 40 ,
				transition: 'all .3s',
				overflow: 'hidden',
				padding: isExpanded ? '0' : '' ,
				opacity: isExpanded ? '0' : '1'  
			},
			closeStyle : {
				display: close ? 'none' : 'block'
			}
		}
		const config = {
			viewHeader: tlCard === '' ? null : (<MDBCardHeader> 
													{tlCard} 
													<ul>
														<li> <FontAwesomeIcon icon='caret-square-down' className='Minimize' onClick={()=>statement.click('collapsible')}/> </li>
														<li> <FontAwesomeIcon icon='window-close' className='Close' onClick={()=>statement.click('close')} /> </li>
													</ul>
												</MDBCardHeader>),
			viewBody: children === undefined ? null : (<MDBCardBody style={statement.collapsibleStyle}> <div ref='inner'> {children} </div> </MDBCardBody>)
			
		}
		return(
			<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
				<MDBCard className={brCard} style={statement.closeStyle}>
					{config.viewHeader}
					{config.viewBody}
				</MDBCard>
			</MDBCol>
		)
	}
}

export class Accordion extends React.Component{
	state = {
		collapseID: ''
	}

	toggleAccordion = (collapseID) => () => {
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}))
	}
	render(){
		return(
		<div>
			<h1>Accordion without icon</h1>
	          <div>
	            <div>
	              <MDBBtn
	                color="primary"
	                onClick={this.toggleAccordion("accordion1")}
	                style={{ marginBottom: "1rem" }}
	              >
	                Collapsible Group Item #1
	              </MDBBtn>
	            </div>
	            <MDBCollapse id="accordion1" isOpen={this.state.collapseID}>
	              Anim pariatur cliche reprehenderit, enim eiusmod high life
	              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
	              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
	              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
	              on it squid single-origin coffee nulla assumenda shoreditch et.
	              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
	              lomo. Leggings occaecat craft beer farm-to-table, raw denim
	              aesthetic synth nesciunt you probably haven&apos;t heard of them
	              accusamus labore sustainable VHS.
	            </MDBCollapse>

	            <div>
	              <MDBBtn
	                color="primary"
	                onClick={this.toggleAccordion("accordion2")}
	                style={{ marginBottom: "1rem" }}
	              >
	                Collapsible Group Item #2
	              </MDBBtn>
	            </div>
	            <MDBCollapse id="accordion2" isOpen={this.state.collapseID}>
	              Anim pariatur cliche reprehenderit, enim eiusmod high life
	              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
	              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
	              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
	              on it squid single-origin coffee nulla assumenda shoreditch et.
	              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
	              lomo. Leggings occaecat craft beer farm-to-table, raw denim
	              aesthetic synth nesciunt you probably haven&apos;t heard of them
	              accusamus labore sustainable VHS.
	            </MDBCollapse>

	            <div>
	              <MDBBtn
	                color="primary"
	                onClick={this.toggleAccordion("accordion3")}
	                style={{ marginBottom: "1rem" }}
	              >
	                Collapsible Group Item #2
	              </MDBBtn>
	            </div>
	            <MDBCollapse id="accordion3" isOpen={this.state.collapseID}>
	              Anim pariatur cliche reprehenderit, enim eiusmod high life
	              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
	              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
	              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
	              on it squid single-origin coffee nulla assumenda shoreditch et.
	              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
	              lomo. Leggings occaecat craft beer farm-to-table, raw denim
	              aesthetic synth nesciunt you probably haven&apos;t heard of them
	              accusamus labore sustainable VHS.
	            </MDBCollapse>
	          </div>
	    </div>
		)
	}
}
