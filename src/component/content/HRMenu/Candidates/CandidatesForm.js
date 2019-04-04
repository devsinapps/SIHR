import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn } from 'mdbreact'
export class CForm extends React.Component{
	render(){
		const { value } = this.props
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
								value={value.email}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='firstname'
								label="First Name" 
								icon="user"
								value={value.firstname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='phone'
								label="Phone" 
								icon="phone"
								value={value.phone}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='lastname'
								label="Last Name" 
								icon="user"
								value={value.lastname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='website'
								label="Web Site" 
								icon="globe-asia"
								value={value.website}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='mobile'
								label="Mobile" 
								icon="mobile"
								value={value.mobile}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='secondaryEmail'
								label="Secondary Email" 
								icon="envelope"
								value={value.secondaryEmail}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='fax'
								label="Fax" 
								icon="fax"
								value={value.fax}
								onChange={this.props.onChange}
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
								value={value.street}
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
								value={value.zip}
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
								value={value.city}
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
								value={value.stateProvince}
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
								value={value.country}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<h5> Professional Details </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='experience'
								label="Experience in Years" 
								icon="user-tie"
								value={value.experience}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='highQualification'
								label="Highest Qualification Held" 
								icon="university"
								value={value.highQualification}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='jobTitle'
								label="Current Job Title" 
								icon="user-tag"
								value={value.jobTitle}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='currentEmployer'
								label="Current Employer" 
								icon="user-md"
								value={value.currentEmployer}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='salary'
								label="Expected Salary" 
								icon="dollar-sign"
								value={value.salary}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='currentSalary'
								label="Current Salary" 
								icon="hand-holding-usd"
								value={value.currentSalary}
								onChange={this.props.onChange}
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
								value={value.skill}
								onChange={this.props.onChange}
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
								value={value.additionalInfo}
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
