import React from 'react';
import "./HomeDetails.css"

const HomeDetails = (props) => {
    console.log (props.item)
    ;
    return (
        <div>
           
             <p> this  <img className="backGround" src={props.item} alt=""/> </p>
        </div>
    );
};

export default HomeDetails;