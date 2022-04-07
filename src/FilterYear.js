import React from "react";
import Month from "./Month";
const FilterYear = (props) => {
  const dropDownHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <select
        value={props.selectedMonth}
        onChange={dropDownHandler}
        className="month"
      >
        <option>Jan</option>
        <option>Feb</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </select>
    </div>
  );
};

export default FilterYear;
