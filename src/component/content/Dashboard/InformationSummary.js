import React, { Component } from 'react'
import Pin from './../../../assets/images/pin.png'
import moment from 'moment'
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
class InformationSummary extends Component{
	render(){
		const { info } = this.props
		return(
			<div className="InformationSummary">
				<Card className='mb-3'>
					<CardBody>
						<CardTitle> {info.title} </CardTitle>
						<CardText> {info.content} </CardText>
					</CardBody>
					<CardFooter>
						<small> <span> Posted By: </span> {info.authorFirstName + ' ' + info.authorLastName} </small>
						<small> <span> Posted Date: </span>{moment(info.createdAt.toDate().toString()).calendar()} </small>
					</CardFooter>
					<div className='PinLogo'>
						<img src={Pin} />
					</div>
				</Card>
			</div>
		)
	}
}

export default InformationSummary