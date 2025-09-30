
const build = (res, result) => {
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(204).json();

    }
    return res;
};

module.exports = { build }