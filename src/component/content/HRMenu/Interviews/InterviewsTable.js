import React from 'react'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const InterviewsTable = (props) => {
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
				<tr>
					<td> No </td>
					<td> Interview Name </td>
					<td> Candidate Name </td>
					<td> Client Name </td>
					<td> Posting Title </td>
					<td> From </td>
					<td> To </td>
					<td> Interviewr(s) </td>
					<td> Interview Owner </td>
					<td> Location </td>
					<td> Schedule Comments </td>
				</tr>
				<tr>
					<td> No </td>
					<td> Interview Name </td>
					<td> Candidate Name </td>
					<td> Client Name </td>
					<td> Posting Title </td>
					<td> From </td>
					<td> To </td>
					<td> Interviewr(s) </td>
					<td> Interview Owner </td>
					<td> Location </td>
					<td> Schedule Comments </td>
				</tr>
				<tr>
					<td> No </td>
					<td> Interview Name </td>
					<td> Candidate Name </td>
					<td> Client Name </td>
					<td> Posting Title </td>
					<td> From </td>
					<td> To </td>
					<td> Interviewr(s) </td>
					<td> Interview Owner </td>
					<td> Location </td>
					<td> Schedule Comments </td>
				</tr>
				<tr>
					<td> No </td>
					<td> Interview Name </td>
					<td> Candidate Name </td>
					<td> Client Name </td>
					<td> Posting Title </td>
					<td> From </td>
					<td> To </td>
					<td> Interviewr(s) </td>
					<td> Interview Owner </td>
					<td> Location </td>
					<td> Schedule Comments </td>
				</tr>
				<tr>
					<td> No </td>
					<td> Interview Name </td>
					<td> Candidate Name </td>
					<td> Client Name </td>
					<td> Posting Title </td>
					<td> From </td>
					<td> To </td>
					<td> Interviewr(s) </td>
					<td> Interview Owner </td>
					<td> Location </td>
					<td> Schedule Comments </td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	)
}