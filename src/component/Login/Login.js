
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {
    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        
        name: "",
        email: '',
        password: '',
        confirmPassword:'',
        error: '',
        success: false,

    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

const handleGoogleSignIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {

                const { displayName, email } = result.user;
                const newUser = {
                    name: displayName,
                    email: email,
                }
                
                setLoggedInUser(newUser);


                history.replace(from)


            }).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;
                // ...
            });

    }


    const handleSubmit = (e) => {
        if (newUser && user.email && user.password && user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    setLoggedInUser(newUserInfo)

                    newUserInfo.success = true;
                    
                    newUserInfo.error = "";
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from)



                })


                .catch(function (error) {
                   
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }
        if (!newUser && user.email && user.password ) {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    
                    newUserInfo.name=res.user.displayName;
                    
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('sign in user info',res.user)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)

                })


                .catch(function (error) {
                  
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ...
                });
        }
        e.preventDefault();
    }

    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
            
        }).then(function () {
            // Update successful.
            console.log("User Name Updated ")
        }).catch(function (error) {
            console.log(error)
        });


    }


    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            if(isFormValid===false && e.target.value !=null){
                alert("Please Enter a Valid Email");
                e.target.value="";
            }



        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasOneDigit = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasOneDigit
            window.localStorage.setItem('password', e.target.value)
            if(isFormValid===false && e.target.value !=null){
                alert("Password Must have atleast 1 digit")
            }
         
            
        }
        if (e.target.name === "confirmPassword"){
           if (e.target.value!=null && e.target.value===window.localStorage.getItem('password')) {
               isFormValid=true;
           }
           else{
               alert("Password Does n't Match");
               e.target.value="";
           }
                 
           
        }


        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }



    }


const fbProvider = new firebase.auth.FacebookAuthProvider();
const handleFbSignIn=()=>{
    firebase.auth().signInWithPopup(fbProvider)
    .then((result) => {

        const { displayName, email } = result.user;
        const newUser = {
            name: displayName,
            email: email,
        }
        
        setLoggedInUser(newUser);


        history.replace(from)


    }).catch(function(error) {
        const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
        
      });




}

const main={
display:"flex",
justifyContent:"center",
margin:'auto',
textAlign:'center',
marginTop:'25px',
paddingBottom:'22px'


}

const inputStyle={

    width:"60%",
    textAlign:"center",
    display:"flex",
justifyContent:"center",
margin:'auto',
padding:'20px',

}

const newUserStyle={
    color:"blue",
    marginTop:'20px',
    fontWeight:'700',
    fontSize:'20px'

}

const buttonStyle={
backgroundColor:"white",
border:"none",
fontWeight:"700",
marginTop:"15px",


}
    return (
      <div className="container">
          <div className="row" style={main}>
              <div className="col-md-12">
              <div>
    <h1>{!newUser ?  <p style={{color:'blue',marginTop:"20px",marginBottom:"20px"}}>  Login Form </p>: <p style={{ color: 'green',marginTop:"20px",marginBottom:"20px" }}> Registration Form</p>} </h1>
           

            {newUser && <form onSubmit={handleSubmit}>
                <input style={inputStyle} onBlur={handleChange} className="form-control" type="text" name="name" placeholder="Your Full Name"></input>
                

                <input style={inputStyle} onBlur={handleChange} name="email" className="form-control" type="text" placeholder=" Email Address" required></input>
                <input style={inputStyle} onBlur={handleChange} name="password" className="form-control" type="password" placeholder=" Password" required></input>
                
                <input style={inputStyle} onBlur={handleChange} name="confirmPassword" className="form-control" type="password" placeholder="Confirm Password" required></input>
                <input style={{

width:"60%",
textAlign:"center",
display:"flex",
justifyContent:"center",
margin:'auto',
padding:'10px',
fontWeight:'700',
color:'white',
backgroundImage:'linear-gradient(30deg,green,blue)'


                }} type="submit" className="form-control" value="Sign up"></input>


            </form>}
            {!newUser && <form onSubmit={handleSubmit}>



                <input style={inputStyle} onBlur={handleChange} name="email" className="form-control" type="text" placeholder="Your Email Address" required></input>
                <input style={inputStyle} id="password" onBlur={handleChange} name="password" className="form-control" type="password" placeholder=" Password" required></input>
                <input style={{

width:"70%",
textAlign:"center",
display:"flex",
justifyContent:"center",
margin:'auto',
padding:'15px',
fontWeight:'600',
color:'white',
backgroundImage:'linear-gradient(30deg,red,purple)'

                }} type="submit" className="form-control" value="Sign in"></input>


            </form>}<br></br>
            
            
            < input style={newUserStyle} onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser"></input>
            <label htmlFor="newUser">{!newUser ?"Don't Have an account? Sign up now": "Start Travelling"}</label><br></br>


            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : "Logged in"} Successfully</p>}

            <button style={buttonStyle} onClick={handleGoogleSignIn}><img className="img-responsive" style={{width:"10%",marginRight:"15px"}} src="https://i.ibb.co/BsGRpCy/google.png" alt="fb"></img>Sign in with Google</button><br></br>
            <button style={buttonStyle} onClick={handleFbSignIn}><img className="img-responsive" style={{width:"10%",marginRight:"15px"}} src="https://i.ibb.co/VLY14d0/fb.png" alt="fb"></img>Sign in with Facebook</button>
        </div>

              </div>
          </div>
      </div>
    );
};

export default Login;

















