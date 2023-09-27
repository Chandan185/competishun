// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  TaskclearErrors,
  addTask,
  deleteTask,
  updateTask,
} from "../store/Actions/TaskActions";
import { useAlert } from "react-alert";
import Loader from "../Components/Loader";
const Task = () => {
  const { tasks, error, loading } = useSelector((state) => state.task);
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(null);
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(TaskclearErrors());
    }
  }, [dispatch, alert, error]);
  const submitTaskHandler = () => {
    dispatch(addTask(description));
    setDescription("");
  };
  const changeStatusHandler = (id, description, status) => {
    const newstatus = status === "pending" ? "Completed" : "pending";
    dispatch(updateTask(id, description, newstatus));
  };
  const editHandler = (id, description, status) => {
    setDescription(description);
    setUpdate(id);
  };
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
    setDescription("");
  };
  const updateTaskHandler = () => {
    dispatch(updateTask(update, description));
    setUpdate(null);
    setDescription("");
  };
  return (
    <Container>
      <Row>
        <h1>To DO LIST</h1>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter a task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Col>
        <Col>
          {update ? (
            <Button onClick={updateTaskHandler}>Update Task</Button>
          ) : (
            <Button onClick={submitTaskHandler}>Add Task</Button>
          )}
        </Col>
      </Row>
      <Row className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <React.Fragment>
                <Loader />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {tasks &&
                  tasks.map((task) => (
                    <tr key={task._id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          onChange={() =>
                            changeStatusHandler(
                              task._id,
                              task.description,
                              task.status
                            )
                          }
                          defaultChecked={task.status === "Completed"}
                        />
                      </td>
                      <td>{task.description}</td>
                      <td>
                        <Button
                          variant={
                            task.status === "pending" ? "danger" : "primary"
                          }
                        >
                          {task.status}
                        </Button>
                      </td>
                      <td>
                        <Button className="mx-2"
                          variant="primary"
                          onClick={() =>
                            editHandler(task._id, task.description, task.status)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                        className="mx-2"
                          variant="danger"
                          onClick={() => deleteHandler(task._id)}
                        >
                          delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Task;
