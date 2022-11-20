import React from 'react';
import fire from './components/config/fire';
import './App.css';
import Dashboard from "./dashboard";
import { useEffect ,initialState} from "react";
import { db } from "./components/config/fire";
import { useState } from "react";
import { doc, getDocs, collection} from 'firebase/firestore';
import {Routes, Route, useNavigate} from 'react-router-dom';





const SignIn = (props) => {
  const [email, setEmail] = useState(initialState);
  // const [ deviceno, setDeviceno] = useState('');
  const [password, setPassword] = useState(initialState);
  const [test, setTest] = useState([]);
  const [load, setLoad] = useState(false);
  const testCollection = collection(db, "Admin");
  // const navigate = useNavigate();

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('./dashboard');
  // };

  useEffect(() => {
    const getTest = async () => {
      const data = await getDocs(testCollection);
      setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   
    getTest();
   
    
  }, []);

  console.log(test);
     const onSignInPressed = () => {
      // var flag = false;
      if(email=='Hassan@gmail.com'  &&  password== 'super'){
        console.log("Successful");
      }
      
//       for(i=0;i<test.length;i++){     
//         if(email===test[i].email  &&  password===test[i].admin_password){
//           // console.log(test[i].email)
//           flag=true;
//           alert("Successful");
//           // props.navigation.navigate("Home");
//             }
           
               
    
//   }

//     //  setLoad(false);
//      if(flag==false){
  
//       alert("Unsuccessful");
//   }
};
  
  
    return (
      
      <div  className = 'App'>
        <div className = 'main'>

           <h1 className='head'>Login</h1>
           <div className='email'>
          Email Address
          <input id="email"  type="email" value={email}  setValue={setEmail}/>
        </div>
        <div>
          <div className='password'>
            Password
          <input id="password"  type="password" value={password} setValue={setPassword} />
          </div>
        </div>
        <button className='btn' onClick={onSignInPressed}>Login</button>
        </div>
      </div>
    )
  }


export default SignIn;