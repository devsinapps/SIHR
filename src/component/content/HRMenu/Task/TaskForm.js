import React, { Component } from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'
export const TaskForm = ({value, onChange, formAction}) => {
	return(
		<Form>
			<h5> Task </h5>
			<Row form>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='subject'
							label="Subject" 
							icon="envelope"
							value={value.subject}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='toDo'
							label="To DO" 
							icon="user"
							value={value.toDo}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							type='date'
							id='fromDate'
							label="From" 
							icon="phone"
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
							label="Due Date" 
							icon="user"
							value={value.toDate}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='status'
							label="Status" 
							icon="globe-asia"
							value={value.status}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='priority'
							label="Priority" 
							icon="mobile"
							value={value.priority}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup>
				<MDBBtn color='primary' size='sm' onClick={()=>formAction('SAVE', '')}> Save </MDBBtn> 
				<MDBBtn color='warning' size='sm' onClick={()=>formAction('UPDATE', '')}> Update </MDBBtn>
				<MDBBtn color='info' size='sm' onClick={()=>formAction('RESET', '')}> Cancel </MDBBtn> 
				<MDBBtn color='danger' size='sm' onClick={()=>formAction('DELETE', '')}> Delete </MDBBtn>
			</FormGroup>
		</Form>
	)
}
