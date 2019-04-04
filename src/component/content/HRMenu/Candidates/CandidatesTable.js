import React from 'react'

//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const CandidatesTable = ({dataRoutes, formAction}) => {
	let no = 1
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
					<th> Zip Postal Code </th>
					<th> Country </th>
					<th> City </th>
					<th> State / Province </th>
					<th> Experience </th>
					<th> Skill </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{dataRoutes.firestore.ordered.Candidates && dataRoutes.firestore.ordered.Candidates.map((data)=>{
					return(
						<tr onClick={()=>formAction('GETDATA', data)}>
							<td> 1 </td>
							<td> {data.firstname + ' ' + data.lastname} </td>
							<td> {data.email} </td>
							<td> {data.phone} </td>
							<td> {data.mobile} </td>
							<td> {data.website} </td>
							<td> {data.zip} </td>
							<td> {data.country} </td>
							<td> {data.city} </td>
							<td> {data.stateProvince} </td>
							<td> {data.experience} </td>
							<td> {data.skill} </td>
						</tr>
					)
				})}
			</MDBTableBody>
		</MDBTable>
	)
}