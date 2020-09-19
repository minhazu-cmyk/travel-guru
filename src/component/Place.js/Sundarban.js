import React from 'react';
import { Link } from 'react-router-dom';

const Sundarban = () => {
    return (
        <div class="row">
            <div class="col-6">
            <h1> <strong>SUNDARBAN</strong></h1>
            <br/>
            <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh</p> 
            <Link to={`/hotel/sundarban`}><button>BOOK HERE</button></Link>
            </div>
            <div class="col-6">
                {/* <p>origin</p>
                <h5 style={place}><strong> Dhaka </strong></h5>
                <p>Destination</p>
                <h5 style={place}><strong> Sundarban </strong></h5>
                <h5>Start Booking here</h5>
            <DatePicker selected={selectDate} 
            onChange={data=> setSelectData (data)} 
            dateFormat="dd/MM/yyy"  placeholderText="dd/mm/yyy"/>
            <br/> 
             <Link to={`/hotel/Cox's Bazar`}><button>BOOK HERE</button></Link> */}
            </div>
            </div>
    );
};

 export default Sundarban;
// import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './Firebase.config';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';

// const Login = () => {
//    const [logInUser, setLogInUser] = useContext(UserContext);
//    const history = useHistory();
//         const location = useLocation();
//         const { from } = location.state || { from: { pathname: "/" } };

//   if(firebase.apps.length===0){
//     firebase.initializeApp(firebaseConfig);
//   }
//     const handleGoogle=()=>{
//      var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(function(result) {
//           const {displayName,email} = result.user;
//           const newUser = {name:displayName,email}
//             setLogInUser(newUser);
//             history.replace(from);
//             // ...
//           }).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });
//     }
//     const handleChange=(e)=>{
//      console.log(e.target.name,e.target.value)
//      if(e.target.name==="email"){
//        const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value)
//        console.log(isEmailValid);
//      }
//      if(e.target.name==="password"){
//        const isPasswordValid = e.target.value.length>6;
//        const hasNumber = /\d{1}/.test(e.target.value)
//        console.log(isPasswordValid && hasNumber);
//      }
//     }
//     const handleSubmit=()=>{

//     }
//     return (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <input type="email"  name="email" id="" onBlur={handleChange} placeholder="Email here"/> <br/>
//             <input type="password"  name="password" id="" onBlur={handleChange} placeholder="password here"/> <br/>
//             <input type="submit" value="submit"/>
//           </form>
//           <br/>
          
//             <button onClick={handleGoogle}>signIn with google</button>
//         </div>
//     );
// };

// export default Login;


