import React from 'react'

//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const TaskTable = (props) => {
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
				<tr>
					<td> No </td>
					<td> Subject </td>
					<td> To DO </td>
					<td> From </td>
					<td> Due Date </td>
					<td> Status </td>
					<td> Priority </td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	)
}