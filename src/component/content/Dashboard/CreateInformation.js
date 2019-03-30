import React, { Component } from 'react'
import {createInformation} from './../../../store/actions/informationActions'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
//mdbreact
import { MDBBtn } from 'mdbreact'

class CreateInformation extends Component{
	state = {
		title: '',
		date: '',
		content: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.createInformation(this.state)
	}
	render(){
		const { title, date, content } = this.state
		const enabled = title.length > 0 &&
						date.length > 0 &&
						content.length > 0;
		return(
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label> Title </Label>
					<Input 
						id="title" 
						value={title}
						size='lg'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label> Date </Label>
					<Input 
						type='date' 
						id="date" 
						value={date}
						size='lg'
						onChange={this.onChange} 
					/>
				</FormGroup>
				<FormGroup>
					<Label> Title </Label>
					<textarea 
						className='form-control' 
					 	id="content" 
				 		value={content}
					 	onChange={this.onChange} 
					/>
				</FormGroup>
				<FormGroup>
					<MDBBtn block disabled={!enabled}> Posting </MDBBtn>
				</FormGroup>
			</Form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		createInformation: (info) => dispatch(createInformation(info))
	}
}

export default connect(null, mapDispatchToProps)(CreateInformation)