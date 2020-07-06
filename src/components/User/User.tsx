import './User.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import faker from 'faker';

const userName = faker.name.firstName() + ' ' + faker.name.lastName();

export interface AppProps {
  getDoctors(): any;
  avatar: any;
}

export const User = (props: AppProps) => {
  return (
    <div className='user-info'>
      <div className='profile-img'>
        <img id='user-avatar' src={props.avatar} alt='Profile Avatar' />
      </div>
      <div className='user-details'>
        <h3>{userName}</h3>
      </div>
      <div className='add-providers'>
        <Button variant='outline-primary' onClick={props.getDoctors}>
          Add Providers
        </Button>{' '}
      </div>
    </div>
  );
};
