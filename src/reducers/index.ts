import { combineReducers } from 'redux';
import { Doctor, Task } from '../models';
import { doctorsReducer } from './doctors';
import { taskReducer } from './task';
import { doctorReducer } from './doctor';

export interface StoreState {
  doctors: Doctor[];
  task: Task[];
  currentDoctor: Doctor[];
}

export const reducers = combineReducers<StoreState>({
  doctors: doctorsReducer,
  task: taskReducer,
  currentDoctor: doctorReducer,
});
