import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const View = () => {
  const [items, setItems] = useState(["ali", "hasan", "reza"]);
  const [name, setName] = useState("");
  const submit = () => {
    setItems([...items, name]);
  };

  const Delete = (name) => {
    setItems(items.filter((e) => e !== name));
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <hr />
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <Button variant="success" onClick={submit}>
        Add Name
      </Button>
      <hr />
      {items.map((item) => (
        <ul class="list-group">
          <li>
            {item}{" "}
            <span class="badge">
              <Button variant="danger" onClick={(e) => Delete(item)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </span>
          </li>
        </ul>
      ))}
    </>
  );
};

export default View;
