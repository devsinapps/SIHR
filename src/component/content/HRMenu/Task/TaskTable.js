import React from 'react'

//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const TaskTable = ({dataRoutes, formAction}) => {
	let no = 1
	return(
		<MDBTable scrollY scrollX hover bordered striped responsive maxHeight='300px'>
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Subject </th>
					<th> To DO </th>
					<th> From </th>
					<th> Due Date </th>
					<th> Status </th>
					<th> Priority </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{dataRoutes.firestore.ordered.Task && dataRoutes.firestore.ordered.Task.map((data)=>{
					return(
						<tr onClick={()=>formAction('GETDATA', data)}>
							<td> {no++} </td>
							<td> {data.subject} </td>
							<td> {data.toDo} </td>
							<td> {data.fromDate} </td>
							<td> {data.toDate} </td>
							<td> {data.status} </td>
							<td> {data.priority} </td>
						</tr>
					)
				})}
			</MDBTableBody>
		</MDBTable>
	)
}