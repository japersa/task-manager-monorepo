import React, { createContext, useReducer, useEffect } from 'react';
import { userAuthAPI } from './api';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token')
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'LOGOUT':
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            userAuthAPI.post('/verify-token', null, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((response) => {
                    dispatch({ type: 'LOGIN', payload: { token } });
                })
                .catch((error) => console.error(error));

        }
    }, []);

    const login = (token) => {
        dispatch({ type: 'LOGIN', payload: { token } });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
