import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, CustomInput } from 'reactstrap'
//mdbreact
import { MDBInput, MDBIcon, MDBBtn } from 'mdbreact'
export class JOForm extends React.Component{
	render(){
		return(
			<Form>
				<h5> Job Opening Information  </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='posting'
								label="posting" 
								icon="pen-alt"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='accountManager'
								label="Account Manager" 
								icon="user"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								type='date'
								id='dateOpened'
								label="Date Opened" 
								icon="calendar-alt"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							 <MDBInput
							 	type='date'
								id='targetDate'
								label="Target Date" 
								icon="calendar-check"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='jobType'
								label="Job Type" 
								icon="fax"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='jobStatus'
								label="Job Opening Status" 
								icon="fax"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='city'
								label="City" 
								icon="city"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='stateProvince'
								label="State / Province" 
								icon="map"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='zip'
								label="Zip Postal Code" 
								icon="address-book"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='experience'
								label="Work Experience" 
								icon="user-tie"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='country'
								label="Country" 
								icon="flag"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='skill'
								label="Skill Set" 
								icon="file-alt"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='salary'
								label="Salary" 
								icon="dollar-sign"
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<MDBBtn color='primary' size='sm' onClick={()=>this.props.formAction('SAVE', '')}> Save </MDBBtn>
					<MDBBtn color='info' size='sm' onClick={()=>this.props.formAction('RESET', '')}> Cancel </MDBBtn>
				</FormGroup>
			</Form>
		)
	}
}
