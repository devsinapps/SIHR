import React, { Component } from 'react'
import {inputKanban} from './../../../store/actions/kanbanActions'
import { connect } from 'react-redux' 
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
class CreateKanban extends Component{
	render(){
		const { dataState } = this.props
		const enabled = dataState.title.length > 0 &&
						dataState.content.length > 0 &&
						dataState.deadline.length > 0 ;
		return(
			<div className="CreateKanban">
				<Form onSubmit={this.props.onSubmit}>
					<Row form>
						<Col md='3'>
							<FormGroup>
								<Label className='labelForm'> Title </Label>
								<Input
									id="title" 
									value={dataState.title}
									size='lg'
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col md='3'>
							<FormGroup>
								<Label className='labelForm'> Description </Label>
								<Input
									id="content" 
									value={dataState.content}
									size='lg'
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col md='3'>
							<FormGroup >
								<Label className='labelForm'> Deadline </Label>
								<Input 
									type='date'  
									id="deadline" 
									value={dataState.deadline}
									size='lg'
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col md='3'>
							<FormGroup>
								<Label className='labelForm'> &nbsp; </Label>
								 <MDBBtn block color="info" onClick={()=>this.props.formAction('SAVE')} disabled={!enabled}>
					        		<MDBIcon icon="paper-plane" className="mr-1" /> Posting
						        </MDBBtn>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</div>
		)
	}
}

export default CreateKanban