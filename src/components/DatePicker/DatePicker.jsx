import React from "react";
import {DayPicker} from "react-day-picker"; 
// import 'react-day-picker/lib/style.css';

export default function DatePicker({selectedDate, handleDateChange}){

  return(
    <>
    <div>
      <DayPicker selected={selectedDate} onDayClick={handleDateChange} />
    </div>
    <h1>AM i Using this ?? </h1>
    </>
  );
}