const authorService = require("../services/authorService");
const responseBuilder = require("../utils/responseBuilder")

const findAll = async (req, res) => {
    const result = await authorService.findAll(req.query);
    return responseBuilder.build(res, result);
};

const findById = async (req, res) => {
    const result = await authorService.findById(req.params.id);
    return responseBuilder.build(res, result);
};

const create = async (req, res) => {
    const result = await authorService.create(req.body);
    return responseBuilder.build(res, result);
};

const update = async (req, res) => {
    const result = await authorService.update(req.params.id, req.body);
    return responseBuilder.build(res, result);
};

const remove = async (req, res) => {
    const result = await authorService.remove(req.params.id);
    return responseBuilder.build(res, {});
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};