import React, { Component } from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'
export class TaskForm extends Component{
	render(){
		const { value } = this.props
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='fromDate'
								label="From" 
								icon="phone"
								value={value.fromDate}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='toDate'
								label="Due Date" 
								icon="user"
								value={value.toDate}
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<MDBBtn color='primary' size='sm' onClick={()=>this.props.formAction('SAVE', '')}> Save </MDBBtn> 
					<MDBBtn color='primary' size='sm' onClick={()=>this.props.formAction('UPDATE', '')}> Update </MDBBtn>
					<MDBBtn color='info' size='sm' onClick={()=>this.props.formAction('RESET', '')}> Cancel </MDBBtn> 
					<MDBBtn color='info' size='sm' onClick={()=>this.props.formAction('DELETE', '')}> Delete </MDBBtn>
				</FormGroup>
			</Form>
		)
	}
}