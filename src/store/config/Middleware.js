const middleware = action => next => {
    next(action);
};

export default middleware;