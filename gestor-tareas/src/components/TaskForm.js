import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, completed: false });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nueva Tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: 8 }}>
        Agregar
      </Button>
    </form>
  );
}

export default TaskForm;