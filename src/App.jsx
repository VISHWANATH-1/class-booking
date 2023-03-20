import React, { useEffect, useState } from "react";
import "./component/Navbar/Navbar.css";
import Navbar from "./component/Navbar/Navbar";
import axios from "axios";
const App = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [bookingDate, setBookingDate] = useState();
  const [availableDates, setAvailableDates] = useState([]);
  const [dateToggler, setDateToggler] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [classData, setClassData] = useState();
  //local json file api fetch

  useEffect(() => {
    axios.get("/onlineClasses.json").then((res) => setClassData(res.data));
  }, []);

  //booking sucess massage
  const bookingEnable = () => {
    if (name && email && bookingDate) {
      setIsBooking(true);
      setDateToggler(false);
    }
  };
  //available dates function
  const showAvailableDate = (bookingdate) => {
    setBookingDate(bookingdate);
    setDateToggler(!dateToggler);
  };

  if (isBooking) {
    return (
      <div>
        <h2>you have Sucessfully Booked the Class</h2>
        <span>we will mail you soon with all details </span>
        <span>onlineClass@support.com</span>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {dateToggler && (
        <div className="datesSelector">
          <div className="datesHeading">
            <h3>Available Class Dates</h3>
          </div>
          <div className="dates">
            <span>20 march 2023</span>
            <span>21 march 2023</span>
            <span>23 march 2023</span>
            <span>25 march 2023</span>
            <span>26 march 2023</span>
            <span>27 march 2023</span>
          </div>
        </div>
      )}

      <div className="form-modal">
        <label>Name</label>
        <input
          className="inp-bx"
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>E-mail</label>
        <input
          className="inp-bx"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          className="inp-bx"
          onChange={(e) => showAvailableDate(e.target.value)}
        />

        <button onClick={bookingEnable}>Submit</button>
      </div>
    </>
  );
};

export default App;
