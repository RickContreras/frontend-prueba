import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </>
  );
}

export default TaskList;