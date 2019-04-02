import React from 'react'

//Reactstrap
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';
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
		isExpanded: false
	}

	collapsible = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}
	render(){
		const { isExpanded, height } = this.state
		const { lgCol, mdCol, smCol, brCard, tlCard, children } = this.props
		const statement = {
			click: children === undefined ? null : this.collapsible,
			collapsibleStyle: {
				height: isExpanded ? '0' : height + 40 ,
				transition: 'all .3s',
				overflow: 'hidden',
				padding: isExpanded ? '0' : '' ,
				opacity: isExpanded ? '0' : '1'  
			}
		}
		const config = {
			viewHeader: tlCard === '' ? null : <MDBCardHeader onClick={statement.click}> {tlCard} </MDBCardHeader>,
			viewBody: children === undefined ? null : (<MDBCardBody style={statement.collapsibleStyle}> <div ref='inner'> {children} </div> </MDBCardBody>)
			
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
}
