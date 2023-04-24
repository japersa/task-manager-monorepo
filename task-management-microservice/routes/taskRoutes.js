const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createTask, listTasks } = require('../controllers/taskController');

const router = express.Router();

router.post('/create', authMiddleware, createTask);
router.get('/list', authMiddleware, listTasks);

module.exports = router;