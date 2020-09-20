import React from 'react';


import "./Home.css";
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
 
 const imgUrl = "https://i.ibb.co/5vNMKpf/Rectangle-1.png"
   const styles = {
     
           backgroundImage: 'url(' + imgUrl + ')',
          
       }

    return (
     
    <div className="main" style={styles}>
   <CardDeck >
   <Card className="card">
     <Card.Img variant="top" src="https://i.ibb.co/5vNMKpf/Rectangle-1.png" />
     <Card.Body>
    
     <Card.Title>COX'S BAZAR</Card.Title>
     </Card.Body>
     <Card.Footer>
     <Link to="/coxsbazar"><button style={{backgroundColor:"yellow",borderRadius:"15px", padding:"2px"}}>BOOK HERE</button></Link>
     </Card.Footer>
</Card>
{/* 1st card */}
   <Card className="card">
     <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdsA4enN3WE7VvJB7jU18LmUlTNjMQ0RNAjQ&usqp=CAU" />
     <Card.Body>
       <Card.Title>sundarban</Card.Title>
      
     </Card.Body>
     <Card.Footer>
     <Link to="/sundarban"><button style={{backgroundColor:"yellow",borderRadius:"15px", padding:"2px"}}>BOOK HERE</button></Link>
     </Card.Footer>
   </Card>

   <Card className="card">
     <Card.Img variant="top" src="https://travelbd.xyz/en/wp-content/uploads/2018/09/teagarden_sylhet_beautifulbangladesh-2.jpeg" />
     <Card.Body>
       <Card.Title>sreemangaal</Card.Title>
       
     </Card.Body>
     <Card.Footer>
     <Link to="/sreemangal"><button style={{backgroundColor:"yellow",borderRadius:"15px", padding:"2px"}}>BOOK HERE</button></Link>
     </Card.Footer>
   </Card>
 </CardDeck>
     </div>
    
  );

    }

export default Home;