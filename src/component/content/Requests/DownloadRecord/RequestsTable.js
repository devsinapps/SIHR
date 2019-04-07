import React from 'react'
//tools
import moment from 'moment'
import ReactToExcel from 'react-html-table-to-excel'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//mdbreact
import { MDBDataTable } from 'mdbreact';
export const RequestsTable = ({dataRoutes}) => {
	const requests = dataRoutes.firestore.ordered.requests
	const excel = <FontAwesomeIcon icon="file-excel" />
	let no = 1
	const data = {
		columns: [
			{
				label: 'No',
		        field: 'no',
		        sort: 'asc',
		        width: 50
			},
			{
				label: 'User',
		        field: 'user',
		        sort: 'asc',
		        width: 250
			},
			{
				label: 'Title',
		        field: 'title',
		        sort: 'asc',
		        width: 250
			},
			{
				label: 'Description',
		        field: 'description',
		        sort: 'asc',
		        width: 550
			},
			{
				label: 'RequestDate',
		        field: 'requestDate',
		        sort: 'asc',
		        width: 150
			},
			{
				label: 'Done Date',
		        field: 'doneDate',
		        sort: 'asc',
		        width: 100
			},
			{
				label: 'Status',
		        field: 'status',
		        sort: 'asc',
		        width: 100
			}
		],
		rows: requests && requests.map((data)=>{
			return(
				{
					no: no++,
					user: data.authorFirstName + ' ' + data.authorLastName,
					title: data.title,
					description: data.content,
					requestDate: moment(data.createdAt.toDate().toString()).calendar(),
					doneDate: data.doneDate,
					status: data.status
				}
			)
		})
	}
	return(
		<div className="_Table">
			<MDBDataTable
			  scrollY
			  scrollX
		      striped
		      bordered
		      small
		      hover
		      maxheight='300px'
		      data={data}
		    />
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
