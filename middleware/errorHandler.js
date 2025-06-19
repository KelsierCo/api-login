function errorHandler(err, req, res, next){
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Error Server';
    
    res.status(statusCode).json({
        status: 'Error',
        statusCode,
        message,
    })
}

export default errorHandler;