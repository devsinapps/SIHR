import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'
export class CForm extends React.Component{
	render(){
		return(
			<Form>
				<h5> Basic info </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='email'
								label="Email" 
								icon="envelope"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='firstname'
								label="First Name" 
								icon="user"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='phone'
								label="Phone" 
								icon="phone"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='lastname'
								label="Last Name" 
								icon="user"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='website'
								label="Web Site" 
								icon="globe-asia"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='mobile'
								label="Mobile" 
								icon="mobile"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='2ndemail'
								label="Secondary Email" 
								icon="envelope"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='fax'
								label="Fax" 
								icon="fax"
							/>
						</FormGroup>
					</Col>
				</Row>
				<h5> Address Information  </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='street'
								label="Street" 
								icon="map-marked-alt"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='zip'
								label="Zip Postal Code" 
								icon="address-book"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='city'
								label="City" 
								icon="city"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='stateProvince'
								label="State / Province" 
								icon="map"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='country'
								label="Country" 
								icon="flag"
							/>
						</FormGroup>
					</Col>
				</Row>
				<h5> Professional Details   </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='experience'
								label="Experience in Years" 
								icon="user-tie"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='highQualification'
								label="Highest Qualification Held" 
								icon="university"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='jobTitle'
								label="Current Job Title" 
								icon="user-tag"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='currentEmployer'
								label="Current Employer" 
								icon="user-md"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='salary'
								label="Expected Salary" 
								icon="dollar-sign"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='currentSalary'
								label="Current Salary" 
								icon="hand-holding-usd"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								type='textarea'
								id='skill'
								label="Skill Set" 
								icon="file-alt"
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								type='textarea'
								id='additionalInfo'
								label="Additional Info" 
								icon="file"
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<MDBBtn color='primary' size='sm'> Save </MDBBtn> 
					<MDBBtn color='info' size='sm'> Cancel </MDBBtn> 
				</FormGroup>
			</Form>
		)
	}
}
