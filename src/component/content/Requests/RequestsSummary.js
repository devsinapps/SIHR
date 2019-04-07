import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, CardTitle, CardText, Button,  Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, CustomInput  } from 'reactstrap'
export const RequestsSummary = ({request, dataRoutes, value, onChange, formAction, className}) => {
	const config = {
		Category: ['Hardware', 'Software'],
		Status: ['waiting', 'done'],
		StatusColor: request.status === 'waiting' ? "#f9ca24" : "#3498db",
		StatusBorder: request.status === 'waiting' ? "#f9ca24" : "#3498db"
	}
	//Action Button Edit dan Delete, Button Akan Disabled jika status sudah done. Action ini hanya untuk user biasa
	const ButtonActionsUser = request.status === 'done' ? 
		  <ModalFooter className='text-center'>
	        <Button color="primary" disabled>Update</Button>{' '}
	        <Button color="primary" disabled>Delete</Button>{' '}
	      </ModalFooter>
	      :
	      <ModalFooter className='text-center'>
	        <Button className='Btn_Modal' color="primary" >Update</Button>{' '}
	        <Button className='Btn_Modal' color="primary">Delete</Button>{' '}
	      </ModalFooter>
	      ;

	//Modal View Untuk Admin Dan User Biasa. Admin Level 1, User Level 2
	const ModalView = dataRoutes.firebase.profile.level === 1 ? 
			<Modal isOpen={value.modal} toggle={()=>formAction('CLOSE', '')} className={className}>
	          <ModalHeader toggle={()=>formAction('CLOSE', '')}>Missing Something? Lets Edit</ModalHeader>
	          <ModalBody>
	           	<Form>
	           		<FormGroup>
	           			<Label className="LabelModal"> Title </Label>
	           			<CustomInput type='select' id='title' onChange={onChange}>
	           				<option value={value.title}> {value.title} </option>
	           				{config.Category.map((cat)=>{
	           					return(
	           						<option key={cat}> {cat} </option>
	           					)
	           				})}
	           			</CustomInput>
	           		</FormGroup>
	           		<FormGroup>
	           			<Label className="LabelModal"> Description </Label>
	           			<Input 
	           				type='text'
	           				id="content" 
	           				value={value.content} 
	           				onChange={onChange} />
	           		</FormGroup>
	           		<FormGroup>
	           			<Label className="LabelModal"> Status </Label>
	           			<Input 
	           				type='text' 
	           				id="status" 
	           				value={value.status} 
	           				onChange={onChange} 
	           				disabled/>
	           		</FormGroup>
	           		<FormGroup>
	           			<Label className="LabelModal"> Status </Label>
	           			<CustomInput type='select' id="status" onChange={onChange}>
	           				<option value={value.status}> {value.status} </option>
	           				{config.Status.map((data)=>{
	           					return(
	           						<option key={data}> {data} </option>
	           					)
	           				})}
	           			</CustomInput>
	           		</FormGroup>
	           		<FormGroup>
	           			<Label className="LabelModal"> Done Date </Label>
	           			<Input 
	           				type='date' 
	           				id="doneDate" 
	           				value={value.doneDate} 
	           				onChange={onChange} />
	           		</FormGroup>
	           	</Form>
	          </ModalBody>
	          <ModalFooter className='text-center'>
	            <Button color="primary" className='Btn_Modal' onClick={()=>formAction('UPDATE', '')}>Update</Button>{' '}
	            <Button color="primary" className='Btn_Modal' onClick={()=>formAction('DELETE', '')}>Delete</Button>{' '}
	          </ModalFooter>
	        </Modal>
	        :
	        <Modal isOpen={value.modal} toggle={()=>formAction('CLOSE', '')} className={className}>
	          <ModalHeader toggle={()=>formAction('CLOSE', '')}>Missing Something? Lets Edit</ModalHeader>
	          <ModalBody>
	           	<Form>
	           		<FormGroup>
	           			<Label className="LabelModal"> Title </Label>
	           			<CustomInput type='select' id='title'onChange={onChange}>
	           				<option value={value.title}> {value.title} </option>
	           				{config.Category.map((cat)=>{
	           					return(
	           						<option key={cat}> {cat} </option>
	           					)
	           				})}
	           			</CustomInput>
	           		</FormGroup>
	           		<FormGroup className="LabelModal">
	           			<Label> Description </Label>
	           			<Input 
	           				type='text'
	           				id="content" 
	           				value={value.content}
	           				onChange={onChange}/>
	           		</FormGroup>
	           		<FormGroup>
	           			<Label className="LabelModal"> Status </Label>
	           			<Input 
	           				type='text' 
	           				id="status" 
	           				value={value.status} 
	           				onChange={onChange} disabled/>
	           		</FormGroup>
	           	</Form>
	          </ModalBody>
	          {ButtonActionsUser}
	        </Modal>
	        ;

	//View Requests, Request hanya muncul sesuai id login. berlaku untuk user biasa
	const RequestViewUser = dataRoutes.firebase.auth.uid === request.authorId ? 
			<Card className='mb-3' style={{borderRight: "2px solid" + config.StatusBorder}}>
				<CardBody>
					<CardTitle> {request.title} </CardTitle>
					<CardText> {request.content} </CardText>
					<small> <span> Request By: </span> {request.authorFirstName + ' ' + request.authorLastName} </small>
					<small> <span> Request Date: </span> {moment(request.createdAt.toDate().toString()).calendar()} </small>
					<div className='Blank_Spot'>
					</div>
					<div className='Status' style={{backgroundColor: config.StatusColor}}>
						<a> <span> Status : </span> {request.status} </a>
					</div>
					<div className='ActionBtn' onClick={() => formAction('GETDATA', request)}>
						<FontAwesomeIcon icon="edit" />
					</div>
				</CardBody>
				{ModalView}
			</Card>
			:
			null
			;
	//////////////////////////////////////////

	if(dataRoutes.firebase.profile.level === 1){
		return(
			<div>
				<Card className='mb-3' style={{borderRight: "2px solid" + config.StatusBorder}}>
					<CardBody>
						<CardTitle> {request.title} </CardTitle>
						<CardText> {request.content} </CardText>
						<small> <span> Request By: </span> {request.authorFirstName + ' ' + request.authorLastName} </small>
						<small> <span> Request Date: </span> {moment(request.createdAt.toDate().toString()).calendar()} </small>
						<div className='Blank_Spot'>
						</div>
						<div className='Status' style={{backgroundColor: config.StatusColor}}>
							<a> <span> Status : </span> {request.status} </a>
						</div>

						<div className='ActionBtn' onClick={() => formAction('GETDATA', request)}>
							<FontAwesomeIcon icon="edit" />
						</div>
					</CardBody>
					{ModalView}
				</Card>
			</div>
		)
	}else{
		return(
			<div>
				{RequestViewUser}
			</div>
		)
	}
}
