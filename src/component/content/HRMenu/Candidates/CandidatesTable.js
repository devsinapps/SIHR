import React from 'react'

//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const CandidatesTable = (props) => {
	return(
		<MDBTable scrollY scrollX hover bordered striped responsive maxHeight='300px'>
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Name </th>
					<th> Email </th>
					<th> Phone </th>
					<th> Mobile </th>
					<th> Website </th>
					<th> Address </th>
					<th> Zip Postal Code </th>
					<th> Country </th>
					<th> City </th>
					<th> State / Province </th>
					<th> Experience </th>
					<th> Skill </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				<tr>
					<td> 1 </td>
					<td> John Doe </td>
					<td> johndoe@gmail.com </td>
					<td> 02199830123 </td>
					<td> +62987871268 </td>
					<td> johndoe.wix.com </td>
					<td> Jakarta </td>
					<td> 7128 </td>
					<td> Indonesia </td>
					<td> Jakarta </td>
					<td> Jawa Barat </td>
					<td> 1 years designer </td>
					<td> Adobe </td>
				</tr>
				<tr>
					<td> 2 </td>
					<td> Jane Doe </td>
					<td> janedoe@gmail.com </td>
					<td> 02199830123 </td>
					<td> +62987871268 </td>
					<td> johndoe.wix.com </td>
					<td> Jakarta </td>
					<td> 7128 </td>
					<td> Indonesia </td>
					<td> Jakarta </td>
					<td> Jawa Barat </td>
					<td> 1 years designer </td>
					<td> Adobe </td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	)
}