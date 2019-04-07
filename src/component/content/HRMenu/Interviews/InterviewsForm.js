import React, { Component } from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn, MDBIcon } from 'mdbreact'
export const InterviewsForm = ({value, onChange, formAction}) => {
	return(
		<Form>
			<h5> Interview Information </h5>
			<Row form>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='interviewName'
							label='Interview Name'
							icon="user-edit"
							value={value.interviewName}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='candidateName'
							label='Candidate Name'
							icon="user-tag"
							value={value.candidateName}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='clientName'
							label='Client Name'
							icon="user-tie"
							value={value.clientName}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='postingTitle'
							label='Posting Title'
							icon="pen-fancy"
							value={value.postingTitle}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							type='date'
							id='fromDate'
							label='From'
							icon="calendar-alt"
							value={value.fromDate}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							type='date'
							id='toDate'
							label='To'
							icon="calendar-check"
							value={value.toDate}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='interviewer'
							label='Interviewer(s)'
							icon="user-clock"
							value={value.interviewer}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='interviewOwner'
							label='Interviewer Owner'
							icon="user-plus"
							value={value.interviewOwner}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='location'
							label='Location'
							icon="map-marker-alt"
							value={value.location}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							type='textarea'
							id='scheduleComments'
							label='Schedule Comments'
							icon="clock"
							value={value.scheduleComments}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<MDBBtn color="primary" size='sm'  onClick={()=>formAction('SAVE', '')}>
	        		<MDBIcon icon="file-signature" className="mr-1" /> Save
		        </MDBBtn>
		        <MDBBtn color="warning" size='sm'  onClick={()=>formAction('UPDATE', '')}>
	        		<MDBIcon icon="file-contract" className="mr-1" /> Update
		        </MDBBtn>
		        <MDBBtn color="info" size='sm'  onClick={()=>formAction('RESET', '')}>
	        		<MDBIcon icon="retweet" className="mr-1" /> Reset
		        </MDBBtn>
				<MDBBtn color="danger" size='sm'  onClick={()=>formAction('DELETE', '')}>
	        		<MDBIcon icon="trash" className="mr-1" /> Delete
		        </MDBBtn>
			</FormGroup>
		</Form>
	)
}
