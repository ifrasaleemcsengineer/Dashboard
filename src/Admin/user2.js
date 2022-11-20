import React, { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Createpopup from "./popups/createpopup";
import Updatepopup from "./popups/updatepopup";
import { db } from "../components/config/fire";


import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
} from "firebase/firestore";

function User2() {
 

  const [User, setUser] = useState([]);
  const adminCollection = collection(db, "User");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(adminCollection);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  return (
    /* content */
    
    <div className="admin-content">
      
      <div id="admin-info">
        <header>Users</header>
        
        <div>
          <table className="table table-striped">
            <tr>
              <th>Customer_id</th>
              <th>Customer Password</th>
              <th>Devices</th>
              <th>Phone Number</th>
              <th>Battery Status</th>
              
            </tr>
            {User.map((User) => {
              return (
                <tr>
                  
                  <td>{User.customer_id}</td>
                  <td>{User.customer_password}</td>
                  <td>{User.devices}</td>
                  <td>{User.phone_number}</td>
                  <td>{User.battery_status}</td>
                 
                  
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default User2;