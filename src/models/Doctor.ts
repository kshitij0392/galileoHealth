import { Task } from './Task';

export interface Doctor {
  doctor_id: string;
  first_name: string;
  last_name: string;
  dob: string;
  degree: string;
  tasks: Task[];
}
