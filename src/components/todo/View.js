import React, { useRef } from "react";
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
  const [nameToAdd, setNameToAdd] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const inputRef = useRef();

  const Add = () => {
    setArray([...array, nameToAdd]);
    setNameToAdd("");
    inputRef.current.focus();
  };

  const deleteAtIndex = (index) => {
    setArray(array.filter((item, idx) => idx !== index));
    setEditingIndex(null);
  };

  const editIndex = (index) => {
    if (index === editingIndex) {
      setEditingIndex(null);
    } else {
      setEditingIndex(index);
    }
  };

  const updateValueAtIndex = (value, indexToUpdate) => {
    setArray(array.map((item, idx) => (idx === indexToUpdate ? value : item)));
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <hr />
      <input
        ref={inputRef}
        value={nameToAdd}
        onChange={(e) => setNameToAdd(e.target.value)}
        type="text"
      />
      <Button variant="primary" onClick={Add}>
        Add Name
      </Button>
      <hr />
      {array.map((item, index) => (
        <ul className="list-group" key={index}>
          <li>
            {index === editingIndex ? (
              <input
                value={item}
                onChange={(e) => updateValueAtIndex(e.target.value, index)}
              />
            ) : (
              item
            )}{" "}
            <span className="badge">
              <span className="badge">
                <Button
                  variant={index === editingIndex ? "success" : "warning"}
                  onClick={() => editIndex(index)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </Button>
              </span>
              <Button variant="danger" onClick={() => deleteAtIndex(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </span>
          </li>
        </ul>
      ))}
      <hr />
      {/* {array.map((item, index) => (
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
      ))} */}
    </>
  );
};

export default View;
