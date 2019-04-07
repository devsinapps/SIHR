import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
export const EmployeeForm = ({value, dataRoutes, onChange, formAction}) => {
	const config = {
		Gender: ['Male', 'Famale'],
		Active: ['Active', 'InActive'],
		Status: ['Full-Time', 'Part-Time', 'Temporarry', 'On-Call'],
		enabledUpdDel: value.id.length > 0 &&
				 value.firstName.length > 0 &&
				 value.lastName.length > 0 &&
				 value.age.length > 0 &&
				 value.address.length > 0 &&
				 value.idCard.length > 0 &&
				 value.gender.length > 0 &&
				 value.dob.length > 0 &&
				 value.pob.length > 0 &&
				 value.dateJoin.length > 0 &&
				 value.division.length > 0 &&
				 value.status.length > 0 &&
				 value.active.length > 0,
		enabled: value.firstName.length > 0 &&
				 value.lastName.length > 0 &&
				 value.age.length > 0 &&
				 value.address.length > 0 &&
				 value.idCard.length > 0 &&
				 value.gender.length > 0 &&
				 value.dob.length > 0 &&
				 value.pob.length > 0 &&
				 value.dateJoin.length > 0 &&
				 value.division.length > 0 &&
				 value.status.length > 0 &&
				 value.active.length > 0,	

	}
	return(
		<Form>
			<Row form>
				<Col lg='3'>
					<FormGroup >
						<Label> FirstName </Label>
						<Input 
							type='text' 
							id="firstName" 
							value={value.firstName} 
							onChange={onChange}/>
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> LastName </Label>
						<Input 
							type='text' 
							id="lastName" 
							value={value.lastName} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Age </Label>
						<Input 
							type='text' 
							id="age" 
							value={value.age} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Address </Label>
						<Input 
							type='text' 
							id="address" 
							value={value.address} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Id card </Label>
						<Input 
							type='text' 
							id="idCard" 
							value={value.idCard} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Gender </Label>
						<CustomInput type='select' id="gender" onChange={onChange}>
							<option value={value.gender}> select </option>
							{config.Gender.map((data)=>{
								return(
									<option key={data}> {data} </option>
								)
							})}
						</CustomInput>
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Date of Bird </Label>
						<Input 
							type='date' 
							id="dob" 
							value={value.dob} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Place of Bird </Label>
						<Input 
							type='text' 
							id="pob" 
							value={value.pob} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Date Join </Label>
						<Input 
							type='date' 
							id="dateJoin" 
							value={value.dateJoin} 
							onChange={onChange} />
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label htmlFor="exampleCustomSelect" className='Division' >Division</Label>
						<CustomInput type="select" id="division" onChange={onChange} required>
								<option value={value.division}>{value.division}</option>
								{dataRoutes.data.divisions.map((data)=>{
									return(
									 <option key={data}>{data}</option>
								 )
								})}		           
						</CustomInput>
				    </FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Status </Label>
						<CustomInput type='select' id="status" onChange={onChange}>
							<option value={value.status}> {value.status} </option>
							{config.Status.map((data)=>{
								return(
									<option key={data}> {data} </option>
								)
							})}
						</CustomInput>
					</FormGroup>
				</Col>
				<Col lg='3'>
					<FormGroup>
						<Label> Active </Label>
						<CustomInput type='select' id="active" onChange={onChange}>
							<option value={value.active}> {value.active} </option>
							{config.Active.map((data)=>{
								return(
									<option key={data}> {data} </option>
								)
							})}
						</CustomInput>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<MDBBtn color="primary"  onClick={()=>formAction('SAVE', '')} disabled={!config.enabled}>
	        		<MDBIcon icon="file-signature" className="mr-1" /> Save
		        </MDBBtn>
		        <MDBBtn color="warning"  onClick={()=>formAction('UPDATE', '')} disabled={!config.enabledUpdDel}>
	        		<MDBIcon icon="file-contract" className="mr-1" /> Update
		        </MDBBtn>
		        <MDBBtn color="info"  onClick={()=>formAction('RESET', '')}>
	        		<MDBIcon icon="retweet" className="mr-1" /> Reset
		        </MDBBtn>
				<MDBBtn color="danger"  onClick={()=>formAction('DELETE', '')} disabled={!config.enabledUpdDel}>
	        		<MDBIcon icon="trash" className="mr-1" /> Delete
		        </MDBBtn>
			</FormGroup>
		</Form>
	)
}
