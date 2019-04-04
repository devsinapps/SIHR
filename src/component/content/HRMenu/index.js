import React from 'react'
//Chart
import { BarChart } from './../../grid/Chart' 
//grid
import { ContainerFluidRow, ColCard } from './../../grid/Custome-Grid'
//Component
import { TableInteviews,TableJobOpening, TableTask } from './HRTable'
//mdbreact
import { MDBBtn } from 'mdbreact'
class HRMenu extends React.Component{
	render(){
		const { dataRoutes } = this.props
		return(
			<div className='HRMenu'>
				<ContainerFluidRow>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Jobs By Type'>
						<BarChart />
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='My interviews'>
						<TableInteviews />
						<div className='text-center'>
							<MDBBtn color='primary' size='sm'> Visit </MDBBtn>
						</div>
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Task'>
						<TableTask />
						<div className='text-center'>
							<MDBBtn color='primary' size='sm'> Visit </MDBBtn>
						</div>
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Jobs Opening'>
						<TableJobOpening 
							dataRoutes={dataRoutes}
						/>
						<div className='text-center'>
							<MDBBtn color='primary' size='sm'> Visit </MDBBtn>
						</div>
					</ColCard>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default HRMenu