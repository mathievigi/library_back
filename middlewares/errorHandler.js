const errorHandler = (err, req, res) => {
    res.status(err.status | 500)
    res.send(err.message | "ko")
}


module.exports = errorHandler