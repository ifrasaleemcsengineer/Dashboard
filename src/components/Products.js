import React, { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Createpopup from "./popups/createpopup";
import Updatepopup from "./popups/updatepopup";
import { data } from "../components/config/fire";
import { ref, onValue, endAt } from "firebase/database";

import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
  connectFirestoreEmulator,
} from "firebase/firestore";



function Product() {
  const [buttoncreateTrigger, setButtonCreateTrigger] = useState(false);
  const [buttonUpdateTrigger, setButtonUpdateTrigger] = useState(false);
  const [model_no, Setmodel] = useState("");

  const [gas, setGas] = useState([]);

  useEffect(() => {
    return onValue(ref(data, `/`), (querySnapShot) => {
      let data = querySnapShot.val();
      setGas(data);
      // console.log(data);
      // console.log(gasRef);
      // console.log(gasRef);
    });
  }, []);
  var counter = 0;
  var counter2= 0;
  var counter3= 0;

    let gasRef = Object.keys(gas);
    gasRef.forEach((key) => {
      if(gas[key].cat == '5'){
        counter++;
      }

      if(gas[key].cat == '10'){
        counter2++;
      }
      if(gas[key].cat == '15'){
        counter3++;
      }
      

      
    });
    console.log(counter);
    console.log(counter2);
    console.log(counter3);
  return (
    /* content */
    <div className="admin-content">
      <div id="admin-info">
        <header>Products</header>
        
        
        <div>
          <table>
            <tr>
              <th>5 kg</th>
              <th>10 kg</th>
              <th>15 kg</th>
              
            </tr>
           
                  <tr>
                    <td>{counter}</td>
                    <td>{counter2}</td>
                    <td>{counter3}</td>
                    
                    
                  </tr>
              
          
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;