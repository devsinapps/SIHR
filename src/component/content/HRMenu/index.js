import React from 'react'
//Chart
import { BarChart } from './../../grid/Chart' 
//grid
import { ContainerFluidRow, ColCard } from './../../grid/Custome-Grid'
//Component
import { TableInteviews,TableJobOpening, TableTask } from './HRTable'
class HRMenu extends React.Component{
	render(){
		return(
			<div className='HRMenu'>
				<ContainerFluidRow>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Jobs By Type'>
						<BarChart />
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='My interviews'>
						<TableInteviews />
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Task'>
						<TableTask />
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='12' brCard='mb-3' tlCard='Jobs Opening'>
						<TableJobOpening />
					</ColCard>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default HRMenu