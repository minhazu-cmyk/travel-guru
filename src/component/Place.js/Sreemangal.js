import React from 'react';
import { Link } from 'react-router-dom';

const Sreemangal = () => {
    return (
        <div>
           <h1> <strong> SREEMANGAL </strong></h1>
            <br/>
            <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971</p> 
            <Link to={`/hotel/SREEMANGAL`}><button>BOOK HERE</button></Link>
        </div>
    );
};

export default Sreemangal;