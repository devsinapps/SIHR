import React from 'react'

//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const TableInteviews = ({dataRoutes}) => {
	return(
		<MDBTable scrollY scrollX bordered responsive hover striped size='sm' maxHeight="300px">
			<MDBTableHead>
				<tr>
					<th> </th>
					<th> Interview Owner </th>
					<th> Interview Name </th>
					<th> From </th>
					<th> To </th>
					<th> Candidate Name </th>
					<th> Client Name </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				<tr>
					<td> </td>
					<td> John Doe </td>
					<td> General Interview </td>
					<td> Feb 9 2:00 PM </td>
					<td> Feb 9 3:00 PM </td>
					<td> Terrence Boyle </td>
					<td> Student </td>
				</tr>
				<tr>
					<td> </td>
					<td> John Doe </td>
					<td> General Interview </td>
					<td> Feb 9 2:00 PM </td>
					<td> Feb 9 3:00 PM </td>
					<td> Terrence Boyle </td>
					<td> Student </td>
				</tr>
				<tr>
					<td> </td>
					<td> John Doe </td>
					<td> General Interview </td>
					<td> Feb 9 2:00 PM </td>
					<td> Feb 9 3:00 PM </td>
					<td> Terrence Boyle </td>
					<td> Student </td>
				</tr>
				<tr>
					<td> </td>
					<td> John Doe </td>
					<td> General Interview </td>
					<td> Feb 9 2:00 PM </td>
					<td> Feb 9 3:00 PM </td>
					<td> Terrence Boyle </td>
					<td> Student </td>
				</tr>
				<tr>
					<td> </td>
					<td> John Doe </td>
					<td> General Interview </td>
					<td> Feb 9 2:00 PM </td>
					<td> Feb 9 3:00 PM </td>
					<td> Terrence Boyle </td>
					<td> Student </td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	)
}

export const TableJobOpening = ({dataRoutes}) => {
	let no = 1
	return(
		<MDBTable scrollY scrollX bordered responsive hover striped size='sm' maxHeight="300px">
			<MDBTableHead>
				<tr>
					<th> No </th>
					<th> Job Title </th>
					<th> Job Type </th>
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
				{dataRoutes.firestore.ordered.JobOpenings && dataRoutes.firestore.ordered.JobOpenings.map((data)=>{
					return(
						<tr>
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

export const TableTask = (props) => {
	return(
		<MDBTable scrollY scrollX bordered responsive hover striped size='sm' maxHeight="300px">
			<MDBTableHead>
				<tr>
					<th> </th>
					<th> Subject </th>
					<th> To-Do Type </th>
					<th> From </th>
					<th> Due Date </th>
					<th> Status </th>
					<th> Priority </th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				<tr>
					<td> </td>
					<td> Testing </td>
					<td> Events </td>
					<td> Feb 21 11:00 AM </td>
					<td>  </td>
					<td>  </td>
					<td>  </td>
				</tr>
				<tr>
					<td> </td>
					<td> Testing </td>
					<td> Events </td>
					<td> Feb 21 11:00 AM </td>
					<td>  </td>
					<td>  </td>
					<td>  </td>
				</tr>
				<tr>
					<td> </td>
					<td> Testing </td>
					<td> Events </td>
					<td> Feb 21 11:00 AM </td>
					<td>  </td>
					<td>  </td>
					<td>  </td>
				</tr>
				<tr>
					<td> </td>
					<td> Testing </td>
					<td> Events </td>
					<td> Feb 21 11:00 AM </td>
					<td>  </td>
					<td>  </td>
					<td>  </td>
				</tr>
				<tr>
					<td> </td>
					<td> Testing </td>
					<td> Events </td>
					<td> Feb 21 11:00 AM </td>
					<td>  </td>
					<td>  </td>
					<td>  </td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	)
}