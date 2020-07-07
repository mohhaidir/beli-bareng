import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/action/action";
import swal from "sweetalert";

export default function CardTodo({ todo }) {
  const dispatch = useDispatch();

  const deleteButton = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this todo!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        dispatch(deleteTodo(todo._id));
        swal("Poof! Your todo has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Woof!");
      }
    });
  };

  return (
    <div>
      <Card
        key={todo._id}
        style={{
          width: "18rem",
          height: "21rem",
          marginRight: "20px",
          marginTop: "20px"
        }}
      >
        <Card.Body>
          <Card.Header as="h5" style={{ textAlign: "center" }}>
            {todo.name}
          </Card.Header>
          <Card.Text style={{ margin: "10px" }}>{todo.description}</Card.Text>
          <div style={styles.allButton}>
            <Link to={`/editTodo/${todo._id}`}>
              <Button
                style={{ marginRight: "10px", width: "120px", height: "30px" }}
                variant="outline-info"
                size="sm"
              >
                Edit
              </Button>
            </Link>
            <Button
              style={{ width: "120px" }}
              variant="outline-danger"
              size="sm"
              onClick={deleteButton}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  allButton: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: "18px"
  }
};
