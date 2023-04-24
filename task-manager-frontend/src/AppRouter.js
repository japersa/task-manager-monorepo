import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import TaskCreationForm from './TaskCreationForm';
import TaskList from './TaskList';
import Home from './Home';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route
                    path="/create-task"
                    element={<TaskCreationForm />}
                />
                <Route
                    path="/tasks"
                    element={<TaskList />}
                />
            </Routes>
        </BrowserRouter >

    );
}

export default AppRouter;
