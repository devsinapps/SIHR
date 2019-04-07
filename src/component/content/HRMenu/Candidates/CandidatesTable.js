import React from 'react'
//mdbreact
import { MDBDataTable, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
export const CandidatesTable = ({dataRoutes, formAction}) => {
	const Candidates = dataRoutes.firestore.ordered.Candidates
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
		        width: 250
	        },
	        {
		        label: 'Email',
		        field: 'email',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Phone',
		        field: 'phone',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Mobile',
		        field: 'mobile',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Zip Postal Code',
		        field: 'zip',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Country',
		        field: 'country',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'City',
		        field: 'city',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'State / Province',
		        field: 'state',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Experience',
		        field: 'experience',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Skill',
		        field: 'skill',
		        sort: 'asc',
		        width: 550
	        }
		],
		rows: Candidates && Candidates.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
					name: data.firstname + ' ' + data.lastname,
					email: data.email,
					phone: data.phone,
					mobile: data.mobile,
					zip: data.zip,
					country: data.country,
					city: data.city,
					state: data.stateProvince,
					experience: data.experience,
					skill: data.skill,
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