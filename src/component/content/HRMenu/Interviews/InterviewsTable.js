import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
export const InterviewsTable = ({dataRoutes, formAction}) => {
	const Interviews = dataRoutes.firestore.ordered.Interviews
	let no = 1;
	const data = {
		columns: [
			{
		        label: 'No',
		        field: 'no',
		        sort: 'asc',
		        width: 50
	        },
	        {
		        label: 'Interview Name',
		        field: 'interviewName',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Candidate Name',
		        field: 'candidateName',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Client Name',
		        field: 'clientName',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Posting Title',
		        field: 'title',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'From',
		        field: 'from',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'To',
		        field: 'to',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Interviewer(s)',
		        field: 'interviewer',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Interview Owner',
		        field: 'interviewerOwner',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Location',
		        field: 'location',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Schedule Comments',
		        field: 'schedule',
		        sort: 'asc',
		        width: 250
	        }
		],
		rows: Interviews && Interviews.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
	    			interviewName: data.interviewName,
			        candidateName: data.candidateName,
			        clientName: data.clientName,
			        title: data.postingTitle,
			        from: data.fromDate,
			        to: data.toDate,
			        interviewer: data.interviewer,
			        interviewerOwner: data.interviewOwner,
			        location: data.location,
			        schedule: data.scheduleComments,
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