import axios from 'axios';

const userAuthAPI = axios.create({
    baseURL: process.env.REACT_APP_USER_API_URL,
});

const taskManagementAPI = axios.create({
    baseURL: process.env.REACT_APP_TASK_API_URL,
});

export { userAuthAPI, taskManagementAPI };