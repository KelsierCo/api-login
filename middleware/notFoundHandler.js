import ApiError from '../utils/ApiError.js';

function notFoundHandler(req, res, next) {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
}

export default notFoundHandler;