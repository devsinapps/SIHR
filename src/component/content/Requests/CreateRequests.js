import React from 'react'
//tools
import { connect } from 'react-redux'
//reactstrap
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
export const CreateRequests = ({value, onChange, formAction}) => {
	const Category = ['Hardware', 'Software']
	const enabled = value.title.length > 0 &&
					value.content.length > 0;
	return(
		<div className='CreateRequests'>
			<Form>
				<FormGroup>
					<Label> Category </Label>
					<CustomInput type="select"  id='title' onChange={onChange}>
						<option value=""> Select </option>
						{Category.map((cat)=>{
							return(
								<option> {cat} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label> Description </Label>
					<textarea type='text' className='form-control' id='content' onChange={onChange}/>
				</FormGroup>
				<FormGroup>
					<MDBBtn block color="info" onClick={()=>formAction('SAVE', '')} disabled={!enabled}>
		        		<MDBIcon icon="pen-alt" className="mr-1" /> Request
			        </MDBBtn>
				</FormGroup>
			</Form>
		</div>
	)
}
