import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, index, deleteTask, toggleTaskCompletion }) {
  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <IconButton edge="end" onClick={() => deleteTask(index)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default Task;