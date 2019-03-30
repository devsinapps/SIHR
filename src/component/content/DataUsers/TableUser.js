import React from 'react'
//Tools
import moment from 'moment'
//Reactstrap
import { Table } from 'reactstrap'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
class TableUser extends React.Component{
	render(){
		const { value, dataRoutes } = this.props
		let number = 1
		return(
			<MDBTable scrollX scrollY striped bordered responsive hover  maxHeight="300px">
				<MDBTableHead>
					<tr>
						<th style={{width: '40px'}}> No </th>
						<th> Name </th>
						<th> Email </th>
						<th style={{width: '250px'}}> Join Date </th>
						<th style={{width: '80px'}}> Level </th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					{dataRoutes.firestore.ordered.users && dataRoutes.firestore.ordered.users.map((user)=>{
						return(
							<tr onClick={() => this.props.formAction('GETUSER', user)}>
								<td> {number++} </td>
								<td> {user.firstName + ' ' + user.lastName} </td>
								<td> {user.email} </td>
								<td> {moment(user.joinDate.toDate().toString()).format("MMM Do YY")}</td>
								<td> {user.level} </td>
							</tr>
						)
					})}
				</MDBTableBody>
			</MDBTable>
		)
	}
}

export default TableUser