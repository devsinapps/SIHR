import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, CustomInput, InputGroup, InputGroupAddon } from 'reactstrap'
//mdbreact
import { MDBInput, MDBBtn, MDBIcon } from 'mdbreact'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const CForm = ({value, dataRoutes, onChange, onChangeNumber, formAction}) => {
	const config = {
		styleFormGroup: {
			position: 'relative'
		},
		styleSelect: {
			border: 'none',
			borderBottom: '1px solid rgba(0,0,0,.2)',
			borderRadius: '0',
			marginTop: '22px',
			marginBottom: '22px',
			boxShadow: 'none',
			marginLeft: '13px',
			outline: 'none'
		},
		styleIcon: {
			fontSize: '28px',
			position: 'absolute',
			bottom: '22px',
			left: '0',
			marginRight: '5px'
		}
	}
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
							onChange={onChange}
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='phone'
							label="Phone" 
							icon="phone"
							min='0'
							max='100'
							maxLength='13'
							pattern="^-?[0-9]\d*\.?\d*$"
							value={value.phone}
							onChange={onChangeNumber}
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
							onChange={onChange}
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='mobile'
							label="Mobile" 
							icon="mobile"
							min='0'
							max='100'
							maxLength='13'
							pattern="^-?[0-9]\d*\.?\d*$"
							value={value.mobile}
							onChange={onChangeNumber}
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
							onChange={onChange}
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
							onChange={onChange}
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
							onChange={onChange}
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='flag' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='country' onChange={onChange} style={config.styleSelect}>
							<option value={value.country}> {value.country.length > 0 ? value.country : 'Country'} </option>
							{dataRoutes.data.countries.map((data)=>{
								return(
									<option value={data.country} onClick={()=>formAction('GETCITY',data)}> {data.country}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='city' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='city' onChange={onChange} style={config.styleSelect}>
							<option value={value.city}> {value.city.length > 0 ? value.city : 'Select City'} </option>
							{value.getCity.map((data)=>{
								return(
									<option value={data}> {data}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='stateProvince'
							label="State / Province" 
							icon="map"
							value={value.stateProvince}
							onChange={onChange}
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
							onChange={onChange}
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='user-tag' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='jobTitle' onChange={onChange} style={config.styleSelect}>
							<option value={value.jobTitle}> {value.jobTitle.length > 0 ? value.jobTitle : 'Current Job Title'} </option>
							{dataRoutes.data.currentTitle.map((data)=>{
								return(
									<option value={data.type}> {data.type}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
				</Col>

				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='currentEmployer'
							label="Current Employer" 
							icon="user-md"
							value={value.currentEmployer}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='salary'
							label="Expected Salary" 
							icon="dollar-sign"
							min='0'
							max='100'
							maxLength='13'
							pattern="^-?[0-9]\d*\.?\d*$"
							value={(value.salary).toLocaleString()}
							onChange={onChangeNumber}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='currentSalary'
							label="Current Salary" 
							icon="hand-holding-usd"
							min='0'
							max='100'
							maxLength='13'
							pattern="^-?[0-9]\d*\.?\d*$"
							value={(value.currentSalary).toLocaleString()}
							onChange={onChangeNumber}
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
							onChange={onChange}
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

