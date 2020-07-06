import React from 'react';
import { Doctor } from '../../models';
import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

interface AppProps {
  providers: Doctor[];
  getTask(doctor: string): any;
}

export const Providers = (props: AppProps) => {
  const getAge = (dob: string) => {
    const today = new Date();
    const birthdate = new Date(dob);
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age = age - 1;
    }
    return age;
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th> Age </th>
            <th>Degree</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.providers.map((doctor) => {
            return (
              <tr key={doctor.doctor_id}>
                <td>
                  {' '}
                  {doctor.first_name} {doctor.last_name}
                </td>
                <td> {getAge(doctor.dob)} </td>
                <td> {doctor.degree} </td>
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={
                    <Tooltip id={`tooltip-${doctor.doctor_id}`}>
                      Click to add provider
                    </Tooltip>
                  }
                >
                  <td onClick={() => props.getTask(doctor.doctor_id)}>
                    <i className='fa fa-plus' aria-hidden='true'></i>
                  </td>
                </OverlayTrigger>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
