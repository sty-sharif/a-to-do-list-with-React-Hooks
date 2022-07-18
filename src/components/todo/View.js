import React from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const View = () => {
  const [array, setArray] = useState(["Person1", "Person2", "Person3"]);
  const [nameToAdd, setNameToAdd] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const inputRef = useRef();

  const addName = () => {
    setArray([...array, nameToAdd]);
    setNameToAdd("");
    inputRef.current.focus();
  };

  const deleteName = (index) => {
    setArray(array.filter((idx) => idx !== index));
    setEditingIndex(null);
  };

  const editIndex = (index) => {
    if (index === editingIndex) {
      setEditingIndex(null);
    } else {
      setEditingIndex(index);
    }
  };

  const updateName = (value, indexToUpdate) => {
    setArray(array.map((item, idx) => (idx === indexToUpdate ? value : item)));
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />
      <input
        ref={inputRef}
        value={nameToAdd}
        onChange={(e) => setNameToAdd(e.target.value)}
        type="text"
      />
      <Button variant="primary" onClick={addName}>
        Add Name
      </Button>
      <hr />
      {array.map((item, index) => (
        <ul className="list-group" key={index}>
          <li>
            {index === editingIndex ? (
              <input
                value={item}
                onChange={(e) => updateName(e.target.value, index)}
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

              <Button variant="danger" onClick={() => deleteName(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default View;
