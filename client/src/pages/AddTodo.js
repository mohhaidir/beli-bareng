import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormAdd } from "../components";
import { addTodoAction } from "../store/action/action";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function AddTodo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddSubmit = e => {
    if (name && description) {
      const dataInput = {
        name,
        description
      };
      dispatch(addTodoAction(dataInput));
      history.push("/todos");
      swal("Success!", "", "success");
    } else {
      swal({
        title: "Nah!",
        text: "All field cannot be empty!",
        icon: "warning"
      });
    }
  };

  return (
    <div>
      {/* <div>FORM TODO SHOW HERE</div> */}
      <FormAdd
        name={name}
        description={description}
        setName={setName}
        setDescription={setDescription}
        onAddSubmit={onAddSubmit}
      />
    </div>
  );
}
