import axios from 'axios';
import { Dispatch } from 'redux';
import { Doctor, Task } from '../models';
import { ActionTypes } from './types';

const baseURL = 'https://testapi.io/api/akirayoglu/0/';

export interface FetchDoctorsAction {
  type: ActionTypes.fetchDoctors;
  payload: Doctor[];
}

export interface FetchTaskAction {
  type: ActionTypes.fetchTask;
  payload: Task[];
}

export interface FetchDoctorAction {
  type: ActionTypes.fetchDoctor;
  payload: Doctor[];
}

export const fetchDoctors = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Doctor[]>(
      baseURL + 'reference/getDoctors'
    );
    dispatch<FetchDoctorsAction>({
      type: ActionTypes.fetchDoctors,
      payload: response.data,
    });
  };
};

export const fetchTask = (doctor: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Task[]>(baseURL + 'tasks/' + doctor);
    dispatch<FetchTaskAction>({
      type: ActionTypes.fetchTask,
      payload: response.data,
    });
  };
};

export const fetchDoctor = (doctor_id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Doctor[]>(baseURL + 'doctor/' + doctor_id);
    dispatch<FetchDoctorAction>({
      type: ActionTypes.fetchDoctor,
      payload: response.data,
    });
  };
};
