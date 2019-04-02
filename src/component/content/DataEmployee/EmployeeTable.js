import React from 'react'
//Tools
import ReactToExcel from 'react-html-table-to-excel'

import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

class EmployeeTable extends React.Component{
	render(){
		const { dataRoutes } = this.props
		const excel = <FontAwesomeIcon icon="file-excel" />
		let number = 1
		return(
			<div className='TableEmployee'>
				<MDBTable scrollX scrollY striped bordered responsive hover  maxHeight="300px">
					<MDBTableHead>
						<tr>
							<th> No </th>
							<th style={{display: "none"}}> Id </th>
							<th style={{width: '300px'}}> FirstName </th>
							<th> LastName </th>
							<th> Age </th>
							<th> Address </th>
							<th> Id Card </th>
							<th> Gender </th>								
							<th> DoB </th>
							<th> PoB </th>
							<th> Join Date </th>
							<th style={{width: "850px"}}> Division </th>
							<th> Status </th>
							<th> Active </th>
						</tr> 
					</MDBTableHead>
					<MDBTableBody>
						{dataRoutes.firestore.ordered.employees && dataRoutes.firestore.ordered.employees.map((employee)=>{
							return(
								<tr key={employee.id} onClick={() => this.props.formAction('GETDATA', employee)}>
									<td style={{textAlign: "center"}}> {number++} </td>
									<td style={{display: "none"}}> {employee.id} </td>
									<td> {employee.firstName} </td>
									<td> {employee.lastName} </td>
									<td> {employee.age} </td>
									<td> {employee.address} </td>
									<td> {employee.idCard} </td>
									<td> {employee.gender} </td>
									<td> {employee.dob} </td>
									<td> {employee.pob} </td>
									<td> {employee.dateJoin} </td>
									<td  style={{width: "450px"}}> {employee.division} </td>
									<td> {employee.status} </td>
									<td> {employee.active} </td>
								</tr>
							)
						})}
					</MDBTableBody>
				</MDBTable>
				<div className="ExportButton">
					<ReactToExcel
						className='_Button'
						table="table_employee"
						filename="data employee"
						sheet="sheet 1"
						buttonText={excel}
					/>
				</div>
			</div>
		)
	}
}

export default EmployeeTable