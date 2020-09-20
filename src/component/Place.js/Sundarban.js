import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Sundarban = () => {
    const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuEKDJkRTlbc4buhS0RFHgfy1tyfkeHI52EQ&usqp=CAU"
    // const imgUrl ="https://imgur.com/mMuRi9J"
   const styles = {
     
           backgroundImage: 'url(' + imgUrl + ')',
           border: "1px solid blue",

           minHeight: "98%",
           maxWidth: "99%",
           maxHeight: "98%",
         
           width: "auto",
           height: "auto",
           position: "absolute",
           textAlign:"centre"
       }
       const description={
        color: "white",
      
        borderRadius: "15px",
        padding:"15px",
        marginTop: "50px",
        height:"400px",
        // width:"300px", 
        
       }
    const [selectDate, setSelectData]=useState(null);
    return (
        <div style={styles} class="row" >
            <div style={description} class="col-6">
            <h1> <strong>SUNDARBAN</strong></h1>
            <br/>
            <h5>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh</h5> 
            >
            </div>
            <div style={{backgroundColor:"white",border:"1px solid black", height:"400px",width:"300px", marginTop: "50px", padding:"20px", borderRadius:"20px"}} class="col-6">
                <p>origin</p>
                <h5 className="place"><strong> Dhaka </strong></h5>
                <p>Destination</p>
                <h5 className="place"><strong> Cox's Bazars </strong></h5>
                <h5>Start Booking here</h5>
                <p>Form</p>
            <DatePicker selected={selectDate} 
            onChange={data=> setSelectData (data)} 
            dateFormat="dd/MM/yyy"  placeholderText="dd/mm/yyy"/>
            <br/>
            <p>To</p>
            <DatePicker selected={selectDate} 
            onChange={data=> setSelectData (data)} 
            dateFormat="dd/MM/yyy"  placeholderText="dd/mm/yyy"/>
            <br/>
            <br/>
             <Link to={`/hotel/Sundarban`}><button style={{backgroundColor:"yellow",borderRadius:"15px", padding:"2px"}}>Start booking</button></Link>
            </div>
            </div>
    );
};

 export default Sundarban;

