import React from 'react'

//mdbreact
import { MDBDataTable } from 'mdbreact'
export const TaskTable = ({dataRoutes, formAction}) => {
	const Task  = dataRoutes.firestore.ordered.Task
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
		        label: 'Subject',
		        field: 'subject',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'To DO ',
		        field: 'todo',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'From ',
		        field: 'from',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Due Date',
		        field: 'dueDate',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Status',
		        field: 'status',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Priority',
		        field: 'priority',
		        sort: 'asc',
		        width: 150
	        }
		],
		rows: Task && Task.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
	    			no: no++,
	    			subject: data.subject,
	    			todo: data.todo,
	    			from: data.fromDate,
	    			dueDate: data.toDate,
	    			status: data.status,
	    			priority: data.priority,
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