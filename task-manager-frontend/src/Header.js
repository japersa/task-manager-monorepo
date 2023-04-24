import React, { useContext } from 'react';
import { AuthContext } from './auth-context';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const { state, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
        logout();
    };

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Task Manager
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            {
                                state.isAuthenticated ? <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/create-task">
                                            Create Task
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/tasks">
                                            Task List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn btn-link" onClick={() => {
                                            handleLogout()
                                        }}>
                                            Logout
                                        </button>
                                    </li>
                                </> : <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">
                                            Register
                                        </Link>
                                    </li></>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
