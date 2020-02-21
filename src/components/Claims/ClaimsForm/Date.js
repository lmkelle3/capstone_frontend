import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";

registerLocale("es", es);

const Date = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onSelect={date => setStartDate(date)}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        style={{ width: "100%", boxSizing: "content-box" }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ textAlign: "left" }}
      >
        Submit
      </button>
    </div>
  );
};
export default Date;
