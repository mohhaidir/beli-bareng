import React, { useState } from "react";
import { FormEdit } from "../components";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const { id } = useParams();
  // const [name, setEditName] = useState("");
  // const [description, setEditDescription] = useState("");

  console.log(id);
  return (
    <div>
      {/* <div>EDIT WILL SHOW HERE</div> */}
      <FormEdit></FormEdit>
    </div>
  );
}
