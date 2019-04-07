import React, { Component } from 'react'
//tools
import moment from 'moment'
//reactstrap
import { Row, Col, Table, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
export const FormUser = ({value, dataRoutes, onChange, formAction}) => {
	const config = {
		enabled : value.firstName.length > 0 &&
				  value.lastName.length > 0 &&
				  value.email.length > 0 &&
				  value.level > 0
	}
	
	return(
		<Form>
			<Row form>
				<Col lg='3' md='3' sm='3'>
					<FormGroup>
						<Label> First Name </Label>
						<Input 
							type='text' 
							value={value.firstName} 
							id="firstName" 
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='3' md='3' sm='3'>
					<FormGroup>
						<Label> Last Name </Label>
						<Input 
							type='text' 
							value={value.lastName} 
							id="lastName" 
							onChange={onChange}   
						/>
					</FormGroup>
				</Col>
				<Col lg='3' md='3' sm='3'>
					<FormGroup>
						<Label> Email </Label>
						<Input 
							type='text' 
							value={value.email} 
							id="email" 
							onChange={onChange}  
						/>
					</FormGroup>
				</Col>
				<Col lg='3' md='3' sm='3'>
					<FormGroup>
						<Label> Level </Label>
						<Input 
							type='number' 
							value={value.level} 
							id="level" 
							onChange={onChange}  
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className="text-center">
				<MDBBtn color="warning"  onClick={()=>formAction('UPDATE', '')} disabled={!config.enabled}>
	        		<MDBIcon icon="file-contract" className="mr-1" /> Update
		        </MDBBtn>
		        <MDBBtn color="danger"  onClick={()=>formAction('DELETE', '')}>
	        		<MDBIcon icon="trash" className="mr-1" /> Delete
		        </MDBBtn>
		        <MDBBtn color="info"  onClick={()=>formAction('RESET', '')}>
	        		<MDBIcon icon="retweet" className="mr-1" />  Reset
		        </MDBBtn>
			</FormGroup>
		</Form>
	)
}
