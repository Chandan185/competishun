import axios from "axios";
import { TaskActions } from "../Reducers/TaskReducer";

export const addTask = (description) => {
  return async (dispatch) => {
    dispatch(TaskActions.addtaskrequest());
    const addtask = async () => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/tasks/new`,
        { description },
        { withCredentials: true }
      );
      return data;
    };
    try {
      const response = await addtask();
      dispatch(TaskActions.addtasksuccess(response.task));
    } catch (error) {
      dispatch(TaskActions.addtaskfail(error.message));
    }
  };
};

export const getTasks = () => {
  return async (dispatch) => {
    dispatch(TaskActions.loadtaskrequest());
    const loadtask = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/tasks/`, {
        withCredentials: true,
      });
      return data;
    };
    try {
      const response = await loadtask();
      dispatch(TaskActions.loadtasksuccess(response.tasks));
    } catch (error) {
      dispatch(TaskActions.loadtaskfail(error.message));
    }
  };
};
export const updateTask = (id, description, status) => {
  return async (dispatch) => {
    dispatch(TaskActions.updatetaskrequest());
    const updatetask = async () => {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/tasks/${id}/update`,
        { description, status },
        { withCredentials: true }
      );
      return data;
    };
    try {
      const response = await updatetask();
      dispatch(TaskActions.updatetasksuccess(response.task));
    } catch (error) {
      dispatch(TaskActions.updatetaskfail(error.message));
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    dispatch(TaskActions.deletetaskrequest());
    const deletetask = async () => {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/tasks/${id}/delete`,
        { withCredentials: true }
      );
      return data;
    };
    try {
      const response = await deletetask();
      dispatch(TaskActions.deletetasksuccess(response.tasks));
    } catch (error) {
      dispatch(TaskActions.deletetaskfail(error.message));
    }
  };
};
export const TaskclearErrors = () => {
  return (dispatch) => {
    dispatch(TaskActions.clearerrors());
  };
};
