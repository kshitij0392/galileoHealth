import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Doctor, Task } from '../models';
import { fetchDoctors, fetchTask, fetchDoctor } from '../actions/index';
import { StoreState } from '../reducers';
import faker from 'faker';
// Component Imports
import { TopNavbar } from './Navbar/Navbar';
import { User } from './User/User';
import { Providers } from './Providers/Providers';
import { CurrentProviders } from './CurrentProviders/CurrentProviders';

export interface AppProps {
  doctors: Doctor[];
  fetchDoctors(): any;
  task: Task[];
  fetchTask(doctor: string): any;
  fetchDoctor(doctor: string): any;
  currentDoctor: Doctor[];
}

class _App extends React.Component<AppProps> {
  currentProviders: any = [];
  avatarURL = faker.image.avatar();
  getAllDoctors = (): void => {
    this.props.fetchDoctors();
  };

  getTaskForDoctor = (doctor: string): void => {
    this.props.fetchTask(doctor);
    const currentDoc = this.props.doctors.find((doc: Doctor) => {
      return doc.doctor_id === doctor;
    });
    const isMatch = this.currentProviders.find((doc: Doctor) => {
      return doc.doctor_id === doctor;
    });
    if (isMatch) {
      alert('Provider added already!');
    } else {
      this.currentProviders.push(currentDoc);
    }
  };

  renderProviders() {
    if (this.props.doctors.length > 0) {
      return (
        <div>
          <h3> Available Providers </h3>
          <Providers
            providers={this.props.doctors}
            getTask={this.getTaskForDoctor}
          ></Providers>
        </div>
      );
    }
  }

  renderCurrentProviders() {
    if (this.currentProviders.length > 0) {
      return (
        <div>
          <h3> Current Providers </h3>
          <CurrentProviders
            currentProviders={this.currentProviders}
            task={this.props.task}
          ></CurrentProviders>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <TopNavbar />
        <div className='app-body'>
          <User avatar={this.avatarURL} getDoctors={this.getAllDoctors} />
          <div className='providers'>
            <div className='available-providers'>{this.renderProviders()}</div>
            <div
              className='current-providers'
              style={{
                overflowY: this.currentProviders.length > 0 ? 'scroll' : 'auto',
              }}
            >
              {' '}
              {this.renderCurrentProviders()}{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  doctors,
  task,
  currentDoctor,
}: StoreState): {
  doctors: Doctor[];
  task: Task[];
  currentDoctor: Doctor[];
} => {
  return { doctors, task, currentDoctor };
};

export const App = connect(mapStateToProps, {
  fetchDoctors,
  fetchTask,
  fetchDoctor,
})(_App);
