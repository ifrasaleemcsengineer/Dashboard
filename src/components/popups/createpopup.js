import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../popups.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/fire";

function Createpopup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [devices, setDevices] = useState("");
  const [location, setLocation] = useState("");
  const [device_no, setDeviceno] = useState("");

  const adminCreateref = collection(db, "testing");

  const [message, setMessage] = useState({ error: false, msg: "" });

  const addadmin = (admin) => {
    return addDoc(adminCreateref, admin);
  };
  // create admin function
  const createAdmin = async (e) => {
    e.preventDefault();

  
    const newAdmin = {
      name,
      phoneno,
      email,
      devices,
      location,
      device_no
    };
    console.log(newAdmin);

    try {
      await addadmin(newAdmin);
      setMessage({ error: false, msg: "Admin added successfully" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setEmail("");
    setName("");
    setPhoneno("");
    setDevices("");
    setLocation("");
    setDeviceno("");
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <AiOutlineClose
          className="close"
          onClick={() => props.setCreateTrigger(false)}
        />
        {props.children}
        <h1>Create Admin</h1>

        {/* form */}
        <form onSubmit={createAdmin}>
          <div className="form">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Admin's Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Admin's Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Admin's Phone Number"
              onChange={(event) => {
                setPhoneno(event.target.value);
              }}
              value={phoneno}
            />
          </div>
          <div className="form">
            <label>Devices</label>
            <input
              type="text"
              placeholder="Enter Admin's Devices"
              onChange={(event) => {
                setDevices(event.target.value);
              }}
              value={devices}
            />
          </div>
          <div className="form">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter Admin's Location"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              value={location}
            />
          </div>
          <div className="form">
            <label>Device_no</label>
            <input
              type="text"
              placeholder="Enter Admin's Device_no"
              onChange={(event) => {
                setDeviceno(event.target.value);
              }}
              value={device_no}
            />
          </div>
          
          <div className="buttonform">
            <button type="Submit" value="Add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Createpopup;