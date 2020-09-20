import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
// import information from "../FakeData/FakeData"

const Hotel = () => {
    const {id}= useParams();
    // const url= `information/$id`
    // const [place, setPlace]= useState(information)
    // console.log(place);
    // useEffect(()=>{
    //    fetch(url)
    //    .then(res=>res.json())
    //    .then(data=>setPlace(data))
    // },[])
  const imgStyle={
     width:"300px",
     height:"200px" 
  }
  const wordSpace={
    wordSpacing: "30PX"
  }
    return (
      <div>
          <p>252 stays apr 13-17 3 guest</p>
         <h1> Stay in  {id} </h1>
 <div class="row">
   <div class="col-4">
     <p><img style={imgStyle} src="https://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" alt=""/> </p>
     <br/>
    <p> <img style={imgStyle} src="https://cache.marriott.com/marriottassets/marriott/HKGWH/hkgwh-guestroom-3959-hor-feat.jpg?downsize=1024px:*" alt=""/> </p>
    <br/>
    <p> <img  style={imgStyle} src="https://media.gettyimages.com/photos/senior-couple-having-fun-in-hotel-room-picture-id1043782452?s=612x612" alt=""/> </p>

 </div>


    <div class="col-4">
    <h3>light bright airy stylish apt & safe peaceful stay</h3>
      <p> 4 guest  2 bedroom   2 beds 2 baths </p>
      <p>wif air condition kitchen<br/> cancellation flexibility available </p>
      <p><img  src="" alt=""/> 4.9(20)  $34/night  </p>
       <br/>
       <h3>Apartment in lost panorama</h3>
      <p> 4 guest  2 bedroom   2 beds 2 baths </p>
      <p>wif air condition kitchen<br/> cancellation flexibility available </p>
      <p style={wordSpace}><img  src="" alt=""/> 4.8(20)  $54/night  </p>
      <br/>
      <h3>AR lounge & pool </h3>
      <p> 4 guest  2 bedroom   2 beds 2 baths </p>
      <p>wif air condition kitchen<br/> cancellation flexibility available </p>
      <p><img  src="" alt=""/> 4.9(20)  $44/night  </p>
   
   
    </div>

    <div class="col-4">
   <p> <img src="https://publicidademarketing.com/wp-content/themes/yootheme/cache/google-maps-08c2bf59.jpeg" alt=""/></p>
   
    </div>

  </div>
  </div> 
  
 );
};

export default Hotel;