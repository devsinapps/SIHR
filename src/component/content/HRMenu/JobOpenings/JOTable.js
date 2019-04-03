import React from 'react'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const JOTable = (props) => {
	return(
		<MDBTable scrollY scrollX hover striped responsive bordered maxHeight='300px' size='sm'>
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Job Title </th>
					<th> Manager </th>
					<th> Date Opened </th>
					<th> Dead Line </th>
					<th> Job Opening Status </th>
					<th> Country </th>
					<th> City </th>
					<th> State / Province </th>
					<th> Zip Postal Code </th>
					<th> Work Experience </th>
					<th> Skill Set </th>
					<th> Salary </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				<tr>
					<td> 1 </td>
					<td> Front End </td>
					<td> Staff </td>
					<td> 22-03-2019 </td>
					<td> 28-03-2019 </td>
					<td> On Progress </td>
					<td> Indonesia </td>
					<td> Jakarta </td>
					<td> Jawa Barat </td>
					<td> 7128 </td>
					<td> First Graduate </td>
					<td> Information Technology </td>
					<td> 7.000.000,00 </td>
				</tr>
				<tr>
					<td> 2 </td>
					<td> Back End </td>
					<td> Staff </td>
					<td> 22-03-2019 </td>
					<td> 28-03-2019 </td>
					<td> On Progress </td>
					<td> Indonesia </td>
					<td> Jakarta </td>
					<td> Jawa Barat </td>
					<td> 7128 </td>
					<td> First Graduate </td>
					<td> Information Technology </td>
					<td> 7.000.000,00 </td>
				</tr>
				<tr>
					<td> 3 </td>
					<td> Marketing </td>
					<td> Staff </td>
					<td> 22-03-2019 </td>
					<td> 28-03-2019 </td>
					<td> On Progress </td>
					<td> Indonesia </td>
					<td> Jakarta </td>
					<td> Jawa Barat </td>
					<td> 7128 </td>
					<td> First Graduate </td>
					<td> Marketing </td>
					<td> 7.000.000,00 </td>
				</tr>
			</MDBTableBody>

		</MDBTable>
	)
}