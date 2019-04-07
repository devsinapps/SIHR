import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
export const JOTable = ({dataRoutes, formAction}) => {
	const JobOpenings = dataRoutes.firestore.ordered.JobOpenings
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
	        label: 'Job Title',
	        field: 'jobTitle',
	        sort: 'asc',
	        width: 150
	      },
	      {
	        label: 'Job Type',
	        field: 'jobType',
	        sort: 'asc',
	        width: 270
	      },
	      {
	        label: 'Manager',
	        field: 'manager',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Date Opened',
	        field: 'dateOpened',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Dead Line',
	        field: 'deadLine',
	        sort: 'asc',
	        width: 150
	      },
	      {
	        label: 'Job Opening Status',
	        field: 'status',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Country',
	        field: 'country',
	        sort: 'asc',
	        width: 100
	      },
	      {
	        label: 'City',
	        field: 'city',
	        sort: 'asc',
	        width: 100
	      },
	      {
	        label: 'State / Province',
	        field: 'state',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: ' Zip Postal Code',
	        field: 'zip',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Work Experience',
	        field: 'experience',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Skill Set',
	        field: 'skill',
	        sort: 'asc',
	        width: 200
	      },
	      {
	        label: 'Salary',
	        field: 'salary',
	        sort: 'asc',
	        width: 100
	      }
	    ],
	    rows: JobOpenings && JobOpenings.map((data)=>{
	    	return(
	    		{	
	    			clickEvent: ()=>formAction('GETDATA', data),
	    			no: no++,
	    			jobTitle: data.postingTitle,
			        jobType: data.jobType,
			        manager: data.accountManager,
			        dateOpened: data.dateOpened,
			        deadLine: data.targetDate,
			        status: data.jobStatus,
			        country: data.country,
			        city: data.city,
			        state: data.stateProvince,
			        zip: data.zip,
			        experience: data.experience,
			        skill: data.skill,
			        salary: 'Rp.'+ (data.salary).toLocaleString()
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