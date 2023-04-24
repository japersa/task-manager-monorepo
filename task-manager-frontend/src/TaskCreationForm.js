import React, { useState } from 'react';
import { taskManagementAPI } from './api';
import Header from './Header';

const TaskCreationForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await taskManagementAPI.post('/create', { title, description }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTitle('');
            setDescription('');
            setError('Task created successfully!');
        } catch (error) {
            setError(error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <h2>Create Task</h2>
                {error && (
                    <div className={`alert ${error.startsWith('Task created') ? 'alert-success' : 'alert-danger'}`}>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create Task
                    </button>
                </form>
            </div>
        </>);
};

export default TaskCreationForm;