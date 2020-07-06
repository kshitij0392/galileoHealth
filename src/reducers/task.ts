import { Task } from '../models';
import { FetchTaskAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const taskReducer = (state: Task[] = [], action: FetchTaskAction) => {
  switch (action.type) {
    case ActionTypes.fetchTask:
      return action.payload;
    default:
      return state;
  }
};
