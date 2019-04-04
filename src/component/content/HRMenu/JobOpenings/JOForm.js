import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, CustomInput } from 'reactstrap'
//mdbreact
import { MDBInput, MDBIcon, MDBBtn, MDBFormInline } from 'mdbreact'
export class JOForm extends React.Component{
	render(){
		const { value } = this.props
		return(
			<Form>
				<h5> Job Opening Information  </h5>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<MDBInput
								id='postingTitle'
								label="Posting Job" 
								icon="pen-alt"
								value={value.postingTitle}
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
								value={value.accountManager}
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
								value={value.dateOpened}
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
								value={value.targetDate}
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
								value={value.jobType}
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
								value={value.jobStatus}
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
								id='experience'
								label="Work Experience" 
								icon="user-tie"
								value={value.experience}
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
					<Col lg='6'>
						<FormGroup>
							<MDBInput
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
								id='salary'
								label="Salary" 
								icon="dollar-sign"
								value={value.salary}
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
