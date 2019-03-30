import React from 'react'
import Loading from './../../../assets/images/Loading.png'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
class KanbanSummary extends React.Component{
	render(){
		const { data, dataRoutes, dataState } = this.props
		const Status = ['onprogress', 'done'];
		const config = {
			colorStatus: data.status == "onprogress" ? "#2ed573" : "#1e90ff"
		}           
	  	return(
			<Col lg='4'>
				<Card className='mb-3'>
					<CardBody>
						<CardTitle> {data.title} </CardTitle>
						<CardText> {data.content} </CardText>
						<small> <span>  Deadline: </span>  {data.deadline} </small>
						<small> <span>  Input by: </span>  {data.authorFirstName + ' ' + data.authorLastName} </small>
						<small> <span> Created At: </span>  {moment(data.createdAt.toDate().toString()).calendar()} </small>
						<div className='Status' style={{backgroundColor: config.colorStatus}}>
							<a> {data.status} </a>
						</div>
						<div className='ActionBtn' onClick={() => this.props.formAction('GETDATA', data)}>
							<FontAwesomeIcon icon="edit" />
						</div>
					</CardBody>
				</Card>
				<Modal isOpen={this.props.dataState.modal} toggle={()=>this.props.formAction('CLOSE', '')} className={this.props.className}>
		          <ModalHeader toggle={()=>this.props.formAction('CLOSE', '')}>Missing Something? Lets Edit</ModalHeader>
		          <ModalBody>
		           	<Form >
		           		<FormGroup>
		           			<Label className='LabelModal'> Title </Label>
		           			<Input 
		           				type='text'
		           				id="title" 
		           				value={dataState.title} 
		           				onChange={this.props.onChange} />
		           		</FormGroup>
		           		<FormGroup>
		           			<Label className='LabelModal'> Description </Label>
		           			<Input 
		           				type='text'
		           				id="content" 
		           				value={dataState.content} 
		           				onChange={this.props.onChange} />
		           		</FormGroup>
		           		<FormGroup>
		           			<Label className='LabelModal'> Deadline </Label>
		           			<Input 
		           				type='date' 
		           				id="deadline" 
		           				value={dataState.deadline} 
		           				onChange={this.props.onChange} />
		           		</FormGroup>
		           		<FormGroup>
		           			<Label className='LabelModal'> Status </Label>
		           			<CustomInput type='select' id="status" onChange={this.props.onChange}>
		           				<option value={dataState.status}> {dataState.status} </option>
		           				{Status.map((data)=>{
		           					return(
		           						<option key={data}> {data} </option>
		           					)
		           				})}
		           			</CustomInput>
		           		</FormGroup>
		           	</Form>
		          </ModalBody>
		          <ModalFooter className='text-center'>
		            <Button color="primary" onClick={()=>this.props.formAction('UPDATE', '')} className='Btn_Modal'>Update</Button>{' '}
		            <Button color="primary" onClick={() => this.props.formAction('DELETE', '')} className='Btn_Modal'>Delete</Button>{' '}
		         </ModalFooter>
		        </Modal>
			</Col>
		)
	}
}

export default KanbanSummary