import React from 'react'
import { Table } from 'reactstrap'
import moment from 'moment'
import ReactToExcel from 'react-html-table-to-excel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//mdbreact
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
class RequestsTable extends React.Component{
	render(){
		const { dataRoutes } = this.props 
		const excel = <FontAwesomeIcon icon="file-excel" />
		let number = 1
		return(
			<div className="_Table">
				<MDBTable scrollX scrollY striped bordered responsive hover  maxHeight="300px">
					<MDBTableHead>
						<tr>
							<th style={{width: '50px'}}> No </th>
							<th> User </th>
							<th style={{width: '150px'}}> Title </th>
							<th> Description </th>
							<th> RequestDate </th>
							<th style={{width: '150px'}}> Done Date </th>
							<th style={{width: '100px'}}> Status </th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{dataRoutes.firestore.ordered.requests.map((request)=>{
							if(request.status != 'waiting'){
								return(
									<tr>
										<td  style={{width: '50px'}}> {number++} </td>
										<td> {request.authorFirstName + '' + request.authorLastName} </td>
										<td style={{width: '150px'}}> {request.title} </td>
										<td> {request.content} </td>
										<td> {moment(request.createdAt.toDate().toString()).calendar()} </td>
										<td  style={{width: '150px'}}> {request.doneDate} </td>
										<td style={{width: '100px'}}> {request.status} </td>
									</tr>
								)
							}else{
								return null
							}
						})
						}
					</MDBTableBody>
				</MDBTable>
				<div className="ExportButton">
					<ReactToExcel
						className='_Button'
						table="table_requests"
						filename="data requests"
						sheet="sheet 1"
						buttonText={excel}
					/>
				</div>
			</div>
		)
	}
}

export default RequestsTable