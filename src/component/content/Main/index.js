import React from 'react'

//grid
import { ContainerFluidRow, ColCard, Col_B, Collapsible, Accordion } from './../../grid/Custome-Grid'
//mdbreact
import { MDBIcon } from 'mdbreact'
class Main extends React.Component{
	render(){
		return(
			<div className='Main'>
				<ContainerFluidRow>
					<ColCard lgCol='3' mdCol='3' smCol='3' brCard='mb-3' tlCard=''>
						<MDBIcon icon="user-tie" />
					</ColCard>
					<ColCard lgCol='3' mdCol='3' smCol='3' brCard='mb-3' tlCard=''>
						asd
					</ColCard>
					<ColCard lgCol='3' mdCol='3' smCol='3' brCard='mb-3' tlCard=''>
						asd
					</ColCard>
					<ColCard lgCol='3' mdCol='3' smCol='3' brCard='mb-3' tlCard=''>
						asd
					</ColCard>
				</ContainerFluidRow>
				<ContainerFluidRow>
					<ColCard lgCol='8' mdCol='8' smCol='8' brCard='mb-8' tlCard=''>
						asd
					</ColCard>
					<ColCard lgCol='4' mdCol='4' smCol='4' brCard='mb-4' tlCard=''>
						asd
					</ColCard>
				</ContainerFluidRow>
				<ContainerFluidRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' brCard='mb-12' tlCard=''>
						<Accordion />
					</ColCard>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default Main