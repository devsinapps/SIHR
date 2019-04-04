import React, { Component } from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'

export class InterviewsForm extends Component{
	render(){
		const { value } = this.props
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<MDBBtn color='primary' size='sm' onClick={()=>this.props.formAction('SAVE', '')}> Save </MDBBtn> 
					<MDBBtn color='warning' size='sm' onClick={()=>this.props.formAction('UPDATE', '')}> Update </MDBBtn>
					<MDBBtn color='info' size='sm' onClick={()=>this.props.formAction('RESET', '')}> Cancel </MDBBtn> 
					<MDBBtn color='danger' size='sm' onClick={()=>this.props.formAction('DELETE', '')}> Delete </MDBBtn>
				</FormGroup>
			</Form>
		)
	}
} 