notFound = (message) => {
    const error = new Error(message)
    error.status = 404;
    return error;
}

invalid = (message) => {
    const error = new Error(message)
    error.status = 400;
    return error;
}

module.exports = {notFound, invalid}