import { Doctor } from '../models';
import { FetchDoctorAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const doctorReducer = (
  state: Doctor[] = [],
  action: FetchDoctorAction
) => {
  switch (action.type) {
    case ActionTypes.fetchDoctor:
      return action.payload;
    default:
      return state;
  }
};
