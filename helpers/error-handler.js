const logger          = require('../config/logger');

module.exports = errorHandler;

function errorHandler (err, req, res, next)  {
    if (typeof (err) === 'string') {
        logger.error(err);
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        logger.error(err);
        return res.status(401).json({ message: 'Invalid Token' });
    }

    logger.error(err);
    return res.status(500).json({ message: err.message });
};