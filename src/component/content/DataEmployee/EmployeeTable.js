import React from 'react'
//Tools
import ReactToExcel from 'react-html-table-to-excel'
//reactstrap
import { Table } from 'reactstrap'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//mdbreact
import { MDBDataTable } from 'mdbreact';
export const EmployeeTable = ({dataRoutes, formAction}) => {
	const employees = dataRoutes.firestore.ordered.employees
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
		        label: 'FirstName',
		        field: 'firstName',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'LastName',
		        field: 'lastName',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Age',
		        field: 'age',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Address',
		        field: 'address',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Id Card',
		        field: 'idCard',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Gender',
		        field: 'gender',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'DoB',
		        field: 'dob',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'PoB',
		        field: 'pob',
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
		        label: 'Division',
		        field: 'division',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Status',
		        field: 'status',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Active',
		        field: 'active',
		        sort: 'asc',
		        width: 100
	        }
		],
		rows: employees && employees.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
	    			no: no++,
	    			firstName: data.firstName,
			        lastName: data.lastName,
			        age: data.age,
			        address: data.address,
			        idCard: data.idCard,
			        gender: data.gender,
			        dob: data.dob,
			        pob: data.pob,
			        joinDate: data.dateJoin,
			        division: data.division,
			        status: data.status,
			        active: data.active
				}
			)
		})
	}
	return(
		<div className='TableEmployee'>
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
					table="table_employee"
					filename="data employee"
					sheet="sheet 1"
					buttonText={excel}
				/>
			</div>
		</div>
	)
}
