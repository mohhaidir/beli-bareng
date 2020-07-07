import React, { useState, useEffect } from "react";
import { FormEdit } from "../components";
import { useParams, useHistory } from "react-router-dom";
import { editTodoAction } from "../store/action/action";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

export default function EditTodo() {
  const { id } = useParams();
  const [name, setEditName] = useState("");
  const [description, setEditDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3001/todo/${id}`)
      .then(result => result.json())
      .then(res => {
        setEditName(res.name);
        setEditDescription(res.description);
      });
  }, []);

  const onEditSubmit = () => {
    const newData = {
      name,
      description
    };
    dispatch(editTodoAction(newData, id));
    swal("Success", "Edit todo is done!", "success");
    history.push("/todos");
  };

  return (
    <div>
      {/* <div>EDIT WILL SHOW HERE</div> */}
      <FormEdit
        name={name}
        description={description}
        setName={setEditName}
        setDescription={setEditDescription}
        onEditSubmit={onEditSubmit}
      />
    </div>
  );
}
