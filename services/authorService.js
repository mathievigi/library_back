
const authorRepository = require("../repositories/authorRepository")
const errorBuilder = require("../utils/errorBuilder")

const findAll = async (filters) => {
    return await authorRepository.findAll(filters);
};

const findById = async (id) => {
    return await authorRepository.findById(id);
};

const create = async (props) => {
    const { firstname, lastname } = props;

    if (firstname && lastname) {
        return await authorRepository.create(props);
    }

    const errorDetails = [];
    if (!firstname) errorDetails.push("firstname is required");
    if (!lastname) errorDetails.push("lastname is required");
    throw errorBuilder.invalid(errorDetails.join());
};

const update = async (id, newOne) => {
    const entity = await findById(id);
    if (!entity) {
        throw errorBuilder.notFound("unknown author");
    }

    const { firstname, lastname, birthdate } = newOne;
    if (firstname || lastname || birthdate !== undefined) {
        entity.firstname = newOne.firstname || entity.firstname;
        entity.lastname = newOne.lastname || entity.lastname;
        if (entity.birthdate !== undefined) {
            entity.birthdate = newOne.birthdate;
        }

        return await authorRepository.update(entity);
    }
    throw errorBuilder.invalid("At least one of the following fields must be provided: firstname, lastname, birthdate");
};

const remove = async (id) => {
    const author = await findById(id);
    if (!author) {
        throw errorBuilder.notFound("unknown author");
    }

    await authorRepository.remove(author);
    return true;
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};
