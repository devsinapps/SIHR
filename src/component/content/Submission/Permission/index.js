import React from 'react'
//Component
import PermissionTable from './PermissionTable'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class Permission extends React.Component{
	render(){
		return(
			<div className='Permission'>
				<Container>
					<Row>
						<Col lg='12'>
							<Card>
								<CardBody>
									<PermissionTable />
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Permission