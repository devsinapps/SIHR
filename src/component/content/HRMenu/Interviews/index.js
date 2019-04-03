import React, { Component } from 'react'
//Grid
import { ContainerFluidRow, ColCard, Collapsible } from './../../../grid/Custome-Grid'
//Component
import { InterviewsTable } from './InterviewsTable'
import { InterviewsForm } from './InterviewsForm'
class Interviews extends Component{
	render(){
		return(
			<div className='Interviews'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Interviews'>
						<InterviewsTable />
					</Collapsible>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Create Interview'>
						<InterviewsForm />
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default Interviews