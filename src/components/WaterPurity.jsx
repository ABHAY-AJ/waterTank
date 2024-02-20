
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import level from "../assets/Pure.webp";
import "./Card.css";

const Humidity = ({ value }) => {
  value = 100;
  return(
    <Card className="text-center mb-3 border-0 custom-bg" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={level} />
    <Card.Body className='bg-secondary bg-gradient rounded-bottom body-cu'>
      <Card.Title className='bg-dark bg-gradient m-auto fs-2 w-27 pb-2 text-light rounded-5 rounded-bottom-0 mb-0 title'>Water Purity</Card.Title>
      <Card.Title className='bg-dark bg-gradient m-auto fs-2 w-27 text-light rounded-5 rounded-top-0 mt-0 level'>{value}%</Card.Title>
      
    </Card.Body>
  </Card>
  )
};

export default Humidity;
