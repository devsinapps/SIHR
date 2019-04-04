import React, { Component } from 'react'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { TaskForm } from './TaskForm'
import { TaskTable } from './TaskTable'
class Task extends Component{
	state = {
		id: '',
		subject: '',
		toDo: '',
		fromDate: '',
		toDate: '',
		status: '',
		priority: ''
	}
	render(){
		const { id,	subject,	toDo,	fromDate,	toDate,	status,	priority } = this.state
		const value = { id,	subject,	toDo,	fromDate,	toDate,	status,	priority }
		return(
			<div className='Task'>
			<ContainerFluidRow>
				<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Task'>
					<TaskTable />
				</Collapsible>
				<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Task'>
					<TaskForm 
						value={value}
					/>
				</Collapsible>

			</ContainerFluidRow>
			</div>
		)
	}
}

export default Task