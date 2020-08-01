import React from 'react'
import './index.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import ReactPlayer from "react-player";
import bank from './assets/bank.jpg';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.png';
import q1 from './assets/q1.jpg';

export const Home = () => (

<div>
   
    <h2><center>Inspired. Brilliant. Rich. You</center></h2>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{  height: "300px",
        width: "100%"}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      style={{  height: "300px",
      width: "100%"}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      style={{  height: "300px",
      width: "100%"}}
    />
  </Carousel.Item>
</Carousel>
<br/>
<div >
<div class="row">
  <div class="column"><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have a look here</h3><br/>
      <ReactPlayer
        url="https://youtu.be/jVy9w2YRBwU" 
        controls = {true}
       
      />
  </div>
  <div class="column">
<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Banks Near Me</h3>
<div class="top-left">Click on me to view banks</div>
   <a href="https://bing.com/maps/default.aspx?ss=yp.Banks" target="_blank">  <img
      src={bank}
      style={{  height: "500px",
      width: "500px"}}
    /></a>
  </div>
</div> 
 
     </div>
    
     <center><h1>Features</h1></center>
     <br/>
     <CardGroup>
  <Card>
    <Card.Img variant="top" src={f1}  style={{  height: "300px",
      width: "300px"}} />
    <Card.Body>
      <Card.Title>User-Friendly</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Yes!! Its User-Friendly</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={f2}  style={{  height: "300px",
      width: "300px"}}/>
    <Card.Body>
      <Card.Title>Smart</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Yes!! It's Smart</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={f3}  style={{  height: "300px",
      width: "300px"}}/>
    <Card.Body>
      <Card.Title>Multilingual</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Yes!! Its Multilingual</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={q1}
      alt="First slide"
      style={{  height: "300px",
        width: "100%"}}
    />
    <Carousel.Caption><h1 style={{color: 'black'}}> "For women, financial independence is a matter of necessity."</h1><br/>
      <small style={{color: 'black'}}>-Carrie Schwab-Pomerantz</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={q1}
      alt="Second slide"
      style={{  height: "300px",
      width: "100%"}}
    />
    <Carousel.Caption><h1 style={{color: 'black'}}> "When you invest, you are buying a day that you don't have to work."<br/>
      </h1><small style={{color: 'black'}}>-Aya Laraya</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={q1}
      alt="Third slide"
      style={{  height: "300px",
      width: "100%"}}
    />
        <Carousel.Caption><h1 style={{color: 'black'}}> "Teach her about how money really works, and she can change the world."<br/>
      </h1><small style={{color: 'black'}}>-Linda Davis Taylo</small>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
