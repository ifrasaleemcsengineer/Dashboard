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

function Admin() {
  const [buttoncreateTrigger, setButtonCreateTrigger] = useState(false);
  const [buttonUpdateTrigger, setButtonUpdateTrigger] = useState(false);

  const [admins, setAdmins] = useState([]);
  const adminCollection = collection(db, "testing");

  useEffect(() => {
    const getAdmins = async () => {
      const data = await getDocs(adminCollection);
      setAdmins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAdmins();
  }, []);

  return (
    /* content */
    <div className="admin-content">
      <div id="admin-info">
        <header>Gas Cyclinder Admins</header>
        <button className="create" onClick={() => setButtonCreateTrigger(true)}>
          Create Admin
        </button>
        <Createpopup
          trigger={buttoncreateTrigger}
          setCreateTrigger={setButtonCreateTrigger}
        ></Createpopup>
        <div>
          <table>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Devices</th>
              <th>Location</th>
              <th>Device_no</th>
              <th>Action</th>
            </tr>
            {admins.map((admins,index) => {
              return (
                <tr>
                  <td>{index + 1 }</td>
                  <td>{admins.name}</td>
                  <td>{admins.email}</td>
                  <td>{admins.phoneno}</td>
                  <td>{admins.devices}</td>
                  <td>{admins.location}</td>
                  <td>{admins.device_no}</td>
                  <td>
                    <button
                      className="update"
                      onClick={() => setButtonUpdateTrigger(true)}
                    >
                      Edit
                    </button>
                    <Updatepopup
                      trigger={buttonUpdateTrigger}
                      setUpdateTrigger={setButtonUpdateTrigger}
                    ></Updatepopup>
                    <button className="delete">Delete </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;