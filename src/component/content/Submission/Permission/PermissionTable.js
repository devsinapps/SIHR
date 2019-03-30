import React from 'react'
import { Table } from 'reactstrap'
class PermissionTable extends React.Component{
	render(){
		return(
			<Table hover bordered responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> Employee </th>
						<th> Description </th>
						<th> Date </th>
						<th> Prosses </th>
						<th> Approval of superiors </th>
						<th> Approval HR </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td> No </td>
						<td> Employee </td>
						<td> Description </td>
						<td> Date </td>
						<td> Prosses </td>
						<td> Approval of superiors </td>
						<td> Approval HR </td>
					</tr>
				</tbody>
			</Table>
		)
	}
}

export default PermissionTable