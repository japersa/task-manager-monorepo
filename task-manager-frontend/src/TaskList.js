import React, { useState, useEffect } from 'react';
import { taskManagementAPI } from './api';
import Header from './Header';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await taskManagementAPI.get('/list', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setTasks(response.data.tasks);
            } catch (error) {
                setError(error.response?.data?.error || 'An error occurred');
            }
        };

        fetchTasks();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <h2>Task List</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {tasks.length === 0 ? (
                    <p>No tasks found.</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default TaskList;