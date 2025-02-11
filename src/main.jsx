import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TaskList from './TaskList.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TaskList />
  </React.StrictMode>,
);
