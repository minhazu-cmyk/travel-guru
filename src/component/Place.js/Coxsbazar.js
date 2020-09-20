import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./coxBazar.css";

const Coxsbazar = () => {
    
   
    const imgUrl = "https://i.ibb.co/5vNMKpf/Rectangle-1.png"
   const styles = {
     
           backgroundImage: 'url(' + imgUrl + ')',
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
    const [selectDate, setSelectData]=useState(null)
    return (
        <div className="main" style={styles} class="row">
            <div style={description} class="col-6">
                <h1> <strong> COX'S BAZAR </strong></h1>
                <br />
                <h5>It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as yellow flower</h5>

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
             <Link to={`/hotel/Cox's Bazar`}><button style={{backgroundColor:"yellow"}}>Start booking</button></Link>
            </div>

        </div>
    );
};

export default Coxsbazar;
