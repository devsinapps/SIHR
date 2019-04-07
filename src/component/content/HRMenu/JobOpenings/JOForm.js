import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, CustomInput, InputGroup, InputGroupAddon } from 'reactstrap'
//mdbreact
import { MDBInput, MDBIcon, MDBBtn, MDBFormInline } from 'mdbreact'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const JOForm = ({value, dataRoutes, onChange, onChangeNumber, formAction}) => {
	const config = {
		styleFormGroup: {
			position: 'relative'
		},
		styleInput: {
			paddingLeft: '10px'
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
			<h5> Job Opening Information  </h5>
			<Row form>
				<Col lg='6'>
					<FormGroup>
						<MDBInput
							id='postingTitle'
							label="Posting Job" 
							icon="pen-alt"
							value={value.postingTitle}
							onChange={onChange}
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
							onChange={onChange}
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
							onChange={onChange}
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='fax' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='jobType' onChange={onChange} style={config.styleSelect}>
							<option value={value.jobType}> {value.jobType.length > 0 ? value.jobType : 'Job Type'} </option>
							{dataRoutes.data.jobtype.map((data)=>{
								return(
									<option value={data.type}> {data.type}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='fax' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='jobStatus' onChange={onChange} style={config.styleSelect}>
							<option value={value.jobStatus}> {value.jobStatus.length > 0 ? value.jobStatus : 'Job Opening Status'} </option>
							{dataRoutes.data.jobstatus.map((data)=>{
								return(
									<option value={data.type}> {data.type}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
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
				          	<FontAwesomeIcon icon='user-tie' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='experience' onChange={onChange} style={config.styleSelect}>
							<option value={value.experience}> {value.experience.length > 0 ? value.experience : 'Work Experience'} </option>
							{dataRoutes.data.workExperience.map((data)=>{
								return(
									<option value={data.type}> {data.type}  </option>
								)
							})}
						</CustomInput>
			      	</InputGroup>
				</Col>
				<Col lg='6'>
					<InputGroup style={config.styleFormGroup}>
				        <InputGroupAddon addonType="prepend">
				          <Col lg='2'>
				          	<FontAwesomeIcon icon='file-alt' style={config.styleIcon}/>
				          </Col>
				        </InputGroupAddon>
				        <CustomInput type='select' id='skill' onChange={onChange} style={config.styleSelect}>
							<option value={value.skill}> {value.skill.length > 0 ? value.skill : 'Skill Set'} </option>
							{dataRoutes.data.skillSet.map((data)=>{
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
							id='salary'
							label="Salary" 
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
