import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencil,
  faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";

const View = () => {
  const [array, setArray] = useState(["Person1", "Person2", "Person3"]);
  const [name, setName] = useState("");

  const Add = () => {
    setArray([...array, name]);
  };

  const Delete = (name) => {
    setArray(array.filter((e) => e !== name));
  };

  const Edit = (item, index) => {
   // console.log("===> setName => ", item, index);
    setName(item);
  };

  const Update = (item, name, index) => {
   // console.log("===> setName => ", item, index, name);
    array[index] = name;
    setName(item);
    //console.log(array);
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <hr />
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <Button variant="primary" onClick={Add}>
        Add Name
      </Button>
      <hr />
      {array.map((item, index) => (
        <ul className="list-group">
          <li key={index}>
            {item}{" "}
            <span className="badge">
              <span className="badge">
                <Button variant="warning" onClick={(e) => Edit(item, index)}>
                  <FontAwesomeIcon icon={faPencil} />
                </Button>
              </span>
              <Button variant="danger" onClick={(e) => Delete(item)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </span>
          </li>
        </ul>
      ))}
      <hr />
      {array.map((item, index) => (
        <ul className="list-group">
          <li key={index}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="badge">
              <Button
                variant="success"
                value={name}
                onClick={(e) => Update(item, name, index)}
              >
                <FontAwesomeIcon icon={faPencilSquare} />
              </Button>
            </span>
          </li>
        </ul>
      ))}
    </>
  );
};

export default View;
