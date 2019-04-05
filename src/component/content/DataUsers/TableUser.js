import React from 'react'
//Tools
import moment from 'moment'
//Reactstrap
import { Table } from 'reactstrap'
//mdbreact
import { MDBDataTable } from 'mdbreact';

const TableUser = ({dataRoutes, formAction}) => {
	const users = dataRoutes.firestore.ordered.users
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
				label: 'Name',
		        field: 'name',
		        sort: 'asc',
		        width: 150
			},
			{
				label: 'Email',
		        field: 'email',
		        sort: 'asc',
		        width: 150
			}, 
			{
				label: 'Join Date',
		        field: 'joinDate',
		        sort: 'asc',
		        width: 100
			},
			{
				label: 'Level',
		        field: 'level',
		        sort: 'asc',
		        width: 100
			}
		],
		rows: users && users.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
	    			no: no++,
	    			name: data.firstName + ' ' + data.lastName,
	    			email: data.email,
	    			joinDate: moment(data.joinDate.toDate().toString()).format("MMM Do YY"),
	    			level: data.level,
				}
			)
		})
	}
	return(
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
	)
}

export default TableUser