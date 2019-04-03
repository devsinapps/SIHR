import React, { Component } from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'

export class InterviewsForm extends Component{
	render(){
		return(
			<Form>
				<h5> Interview Information </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='interviewName'
								label='Interview Name'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='candidateName'
								label='Candidate Name'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='clientName'
								label='Client Name'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='postingTitle'
								label='Posting Title'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='fromDate'
								label='From'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='toDate'
								label='To'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='Interviewer'
								label='Interviewer(s)'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='interviewOwner'
								label='Interviewer Owner'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='location'
								label='Location'
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								type='textarea'
								id='scheduleComments'
								label='Schedule Comments'
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<MDBBtn color='primary' size='sm'> Save </MDBBtn>
					<MDBBtn color='light' size='sm'> Cancel </MDBBtn>
				</FormGroup>
			</Form>
		)
	}
} 