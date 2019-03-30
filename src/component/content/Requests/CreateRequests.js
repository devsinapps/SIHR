import React from 'react'
import { createRequests } from './../../../store/actions/requestsActions'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBIcon } from 'mdbreact'
class CreateRequests extends React.Component{
	render(){
		const { value } = this.props
		const Category = ['Hardware', 'Software']
		const enabled = value.title.length > 0 &&
						value.content.length > 0;
		return(
			<div className='CreateRequests'>
				<Form>
					<FormGroup>
						<Label> Category </Label>
						<CustomInput type="select"  id='title' onChange={this.props.onChange}>
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
						<textarea type='text' className='form-control' id='content' onChange={this.props.onChange}/>
					</FormGroup>
					<FormGroup>
						<MDBBtn block color="info" onClick={()=>this.props.formAction('SAVE', '')} disabled={!enabled}>
			        		<MDBIcon icon="pen-alt" className="mr-1" /> Request
				        </MDBBtn>
					</FormGroup>
				</Form>
			</div>

		)
	}
}

export default CreateRequests