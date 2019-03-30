import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Container, Row, Col, Card } from 'reactstrap'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
class ReactBootstrapTable extends Component{
	state = {
		employees: [],

	}

	componentDidMount(){
		const { employees } = this.props
		setTimeout(()=>{
			this.setState({
				employees:  this.props.employees
			})
		}, 5000)
	}
	render(){
		// const products = [
		// 	{
		//       id: 1,
		//       name: "Product1",
		//       price: 120
		//   	}, 
		//   	{
		//       id: 2,
		//       name: "Product2",
		//       price: 80
		//   	}
		// ]
		const { employees } = this.state
		return(
			<div>
				<Container>
					<Row>
						<Col lg='12'>
							<Card>
								<BootstrapTable data={employees} striped hover sm>
									      <TableHeaderColumn isKey dataField="id"> id </TableHeaderColumn>
									      <TableHeaderColumn dataField="firstName"  filter={ { type: 'RegexFilter', delay: 1000 } }>First Name</TableHeaderColumn>
									      <TableHeaderColumn dataField="lastName">Last Name</TableHeaderColumn>
									      <TableHeaderColumn dataField="age"  >Age</TableHeaderColumn>
									      <TableHeaderColumn dataField="address"  >Address</TableHeaderColumn>
									      <TableHeaderColumn dataField="idCard"  >Id Card</TableHeaderColumn>
									      <TableHeaderColumn dataField="dob"  >DoB</TableHeaderColumn>
									      <TableHeaderColumn dataField="pob">PoB</TableHeaderColumn>
									      <TableHeaderColumn dataField="dateJoin">Date Join</TableHeaderColumn>
									      <TableHeaderColumn dataField="division">Division</TableHeaderColumn>
									      <TableHeaderColumn dataField="status">Status</TableHeaderColumn>
									      <TableHeaderColumn dataField="active">Active</TableHeaderColumn>
								</BootstrapTable>

							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		employees: state.firestore.ordered.employees
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'employees'
	}])
)(ReactBootstrapTable)
