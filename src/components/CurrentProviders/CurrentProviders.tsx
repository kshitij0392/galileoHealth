import './CurrentProviders.css';
import React from 'react';
import { Doctor } from '../../models/Doctor';
import {
  Accordion,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  ListGroup,
} from 'react-bootstrap';
import { Task } from '../../models';

interface AppProps {
  currentProviders: Doctor[];
  task: Task[];
}

export const CurrentProviders = (props: AppProps) => {
  const componentDidMount = () => {
    const task = props.task;
    if (task.length > 0) {
      props.currentProviders.forEach((cp) => {
        if (cp.doctor_id === task[0].owner) {
          cp.tasks = task;
        }
      });
    }
  };
  componentDidMount();

  return (
    <div className='scrollableProviders'>
      {props.currentProviders.map((cp) => {
        return (
          <Accordion key={cp.doctor_id}>
            <Card>
              <Card.Header>
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={
                    <Tooltip id={`tooltip-${cp.doctor_id}`}>
                      Click to view the tasks.
                    </Tooltip>
                  }
                >
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    {cp.first_name + ' ' + cp.last_name}
                  </Accordion.Toggle>
                </OverlayTrigger>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  {cp.tasks ? (
                    cp.tasks.map((task: Task) => {
                      return (
                        <ListGroup key={task.task_id}>
                          <ListGroup.Item>
                            {task.task_id.toLocaleUpperCase()}
                          </ListGroup.Item>
                        </ListGroup>
                      );
                    })
                  ) : (
                    <ListGroup>
                      <ListGroup.Item>No Tasks available</ListGroup.Item>
                    </ListGroup>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
};
