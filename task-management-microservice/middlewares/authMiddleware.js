const axios = require('axios');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token)

        const response = await axios.post(`${process.env.USER_API_URL}/verify-token`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        req.user = response.data.user;
        req.token = token;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authMiddleware;
