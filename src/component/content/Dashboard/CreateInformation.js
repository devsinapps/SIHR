import React, { Component } from 'react'
//reactstrap
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
export const CreateInformation = ({value, onChange, formAction}) => {
	const enabled = value.title.length > 0 &&
					value.date.length > 0 &&
					value.content.length > 0;
	return(
		<Form>
			<FormGroup>
				<Label> Title </Label>
				<Input 
					id="title" 
					value={value.title}
					size='lg'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label> Date </Label>
				<Input 
					type='date' 
					id="date" 
					value={value.date}
					size='lg'
					onChange={onChange} 
				/>
			</FormGroup>
			<FormGroup>
				<Label> Title </Label>
				<textarea 
					className='form-control' 
				 	id="content" 
			 		value={value.content}
				 	onChange={onChange} 
				/>
			</FormGroup>
			<FormGroup>
				<MDBBtn color="info" block disabled={!enabled} onClick={()=>formAction('SAVE', '')}>
	        		<MDBIcon icon="paper-plane" className="mr-1"/>  Posting
		        </MDBBtn>
			</FormGroup>
		</Form>
	)
}

