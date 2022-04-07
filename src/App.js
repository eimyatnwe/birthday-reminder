import react from "react";
import React, { useState } from "react";
import logo from "./logo.svg";
import List from "./List";
import Data from "./Data";
import "./App.css";
import FilterYear from "./FilterYear";

function App() {
  const [people, setPeople] = useState(Data);
  const [filterMonth, setFilterMonth] = useState("Jan");
  const onChangeFilter = (selectedMonth) => {
    setFilterMonth(selectedMonth);
  };
  // console.log(filterMonth, Data[0].month);

  return (
    <main>
      <section className="container">
        <h3 id="count">Whose Birthday is on {filterMonth}</h3>
        <FilterYear onChangeFilter={onChangeFilter} />
        <List people={people} filterMonth={filterMonth} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
