import React, { Component } from 'react'
//assets
import Pin from './../../../assets/images/pin.png'
//tools
import moment from 'moment'
//reactstrap
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
export const InformationSummary = ({info}) => {
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
