import React from 'react'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const JOTable = ({dataRoutes, formAction}) => {
	let no = 1
	return(
		<MDBTable scrollY scrollX hover striped responsive bordered maxHeight='300px' size='sm' style={{tableLayout: 'fixed'}}>
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Job Title </th>
					<th> Job Type </th>
					<th> Manager </th>
					<th> Date Opened </th>
					<th> Dead Line </th>
					<th style={{width: '200px'}}> Job Opening Status </th>
					<th> Country </th>
					<th> City </th>
					<th > State / Province </th>
					<th > Zip Postal Code </th>
					<th > Work Experience </th>
					<th> Skill Set </th>
					<th> Salary </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{dataRoutes.firestore.ordered.JobOpenings && dataRoutes.firestore.ordered.JobOpenings.map((data)=>{
					return(
						<tr onClick={()=>formAction('GETDATA', data)}>
							<td> {no++} </td>
							<td> {data.postingTitle} </td>
							<td> {data.jobType} </td>
							<td> {data.accountManager} </td>
							<td> {data.dateOpened} </td>
							<td> {data.targetDate} </td>
							<td> {data.jobStatus} </td>
							<td> {data.country} </td>
							<td> {data.city} </td>
							<td> {data.stateProvince} </td>
							<td> {data.zip} </td>
							<td> {data.experience} </td>
							<td> {data.skill} </td>
							<td> {data.salary} </td>
						</tr>
					)
				})}
				
			</MDBTableBody>

		</MDBTable>
	)
}