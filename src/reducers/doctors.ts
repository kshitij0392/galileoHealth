import { Doctor } from '../models';
import { FetchDoctorsAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const doctorsReducer = (
  state: Doctor[] = [],
  action: FetchDoctorsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchDoctors:
      return action.payload;
    default:
      return state;
  }
};
