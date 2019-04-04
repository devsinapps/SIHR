import React from 'react'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const InterviewsTable = ({dataRoutes, formAction}) => {
	return(
		<MDBTable scrollY scrollX hover bordered striped responsive maxHeight='300px'>
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Interview Name </th>
					<th> Candidate Name </th>
					<th> Client Name </th>
					<th> Posting Title </th>
					<th> From </th>
					<th> To </th>
					<th> Interviewr(s) </th>
					<th> Interview Owner </th>
					<th> Location </th>
					<th> Schedule Comments </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{dataRoutes.firestore.ordered.Interviews && dataRoutes.firestore.ordered.Interviews.map((data)=>{
					return(
					<tr onClick={()=>formAction('GETDATA', data)}>
						<td> No </td>
						<td> {data.interviewName} </td>
						<td> {data.candidateName} </td>
						<td> {data.clientName} </td>
						<td> {data.postingTitle} </td>
						<td> {data.fromDate} </td>
						<td> {data.toDate} </td>
						<td> {data.interviewer} </td>
						<td> {data.interviewOwner} Owner </td>
						<td> {data.location} </td>
						<td> {data.scheduleComments} </td>
					</tr>	
					)
				})}
			</MDBTableBody>
		</MDBTable>
	)
}