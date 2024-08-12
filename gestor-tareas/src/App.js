import React, { useState } from 'react';
import { Container, Typography, Paper, List } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestor de Tareas
      </Typography>
      <Paper style={{ padding: 16 }}>
        <TaskForm addTask={addTask} />
        <List>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
        </List>
      </Paper>
    </Container>
  );
}

export default App;