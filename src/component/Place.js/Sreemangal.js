import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sreemangal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Sreemangal = () => {
    const imgUrl = "https://travelbd.xyz/en/wp-content/uploads/2018/09/teagarden_sylhet_beautifulbangladesh-2.jpeg"
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
       const [selectDate, setSelectData]= useState(null);
    return (
        <div  style={styles} class="row">
            <div style={description} class="col-6">
                <h1> <strong> SREEMANGAL </strong></h1>
                <br/>
                <h5>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971</h5>

            </div>
            <div style={{backgroundColor:"white",border:"1px solid black", height:"400px",width:"300px", marginTop: "50px", padding:"20px", borderRadius:"20px"}} class="col-6">
                <p>origin</p>
                <h5 className="place"><strong> Dhaka </strong></h5>
                <p>Destination</p>
                <h5 className="place"><strong>Sreemangal </strong></h5>
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
             <Link to={`/hotel/SREEMANGAL`}><button style={{backgroundColor:"yellow"}}>Start booking</button></Link>
            </div>

        </div>
    );
};

export default Sreemangal;
