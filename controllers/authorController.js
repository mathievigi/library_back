const authorService = require("../services/authorService");
const {ok} = require("../utils/responseBuilder")

const findAll = async (req, res) => {
    const result = await authorService.findAll(req.query);
    return ok(res, result);
};

const findById = async (req, res) => {
    const result = await authorService.findById(req.params.id);
    return ok(res, result);
};

const create = async (req, res) => {
    const result = await authorService.create(req.body);
    return ok(res, result);
};

const update = async (req, res) => {
    const result = await authorService.update(req.params.id, req.body);
    return ok(res, result);
};

const remove = async (req, res) => {
    await authorService.remove(req.params.id);
    return ok(res);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};