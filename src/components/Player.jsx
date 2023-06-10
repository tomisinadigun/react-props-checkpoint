import React from 'react'
import players from '../players'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Player = ({name= "Not Available", nationality="Not Available", team = "Not Available", jersyNumber ="Not Available", age="Not Available", image="Not Available"}) => {
  return (
    <>
        <Card style={{ width: '18rem', marginBottom: "60px" }}>
            <Card.Img variant="top" src={image} style={{minWidth:"280px", maxWidth:"290px", maxHeight:"250px", minHeight:"250px", width: "100%"}} />
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Jersy Number: {jersyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Player