import React from "react";
const List = (props) => {
  props.people.map((person) => {
    if (props.filterMonth !== person.month) {
      return (
        <div>
          <article className="person">No Birthday on this day</article>
        </div>
      );
    }
  });
  return (
    <div>
      {props.people.map((person) => {
        const { id, name, age, image, month } = person;
        if (month === props.filterMonth) {
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                {" "}
                <h4>{name}</h4>
                <p>{month}</p>
                <p>{age} Years</p>
              </div>
            </article>
          );
        }
      })}
    </div>
  );
};

export default List;
