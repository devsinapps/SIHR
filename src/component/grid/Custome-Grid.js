import React from 'react'

//Reactstrap
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';
export const ContainerFluidRow = (props) => {
	const { rowClass, children } = props
	return(
		<MDBContainer fluid>
			<MDBRow className={rowClass}>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}

export const ContainerRow = (props) => {
	const { rowClass, children } = props
	return(
		<MDBContainer>
			<MDBRow className={rowClass}>
				{children}
			</MDBRow>
		</MDBContainer>
	)
}

export const ColCard = (props) => {
	const { lgCol, mdCol, smCol, brCard, tlCard, children } = props
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

export const Col_B = (props) => {
	const { lgCol, mdCol, smCol, style, children } = props
	return(
		<MDBCol lg={lgCol} md={mdCol} sm={smCol} style={style}>
			{children}
		</MDBCol>
	)
}

export const Card_B = (props) => {
	const { brCard, tlCard, children } = props
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
