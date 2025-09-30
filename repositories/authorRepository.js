const { Op } = require("sequelize");
const {
    models: { author, book },
} = require("../models");


const include = [
    {
        association: 'books',
        required: false,
        where: {}
    }
]

const findAll = (filters) => {
    const where = {};
    if ((JSON.stringify(filters) !== "{}")) {
        if (filters.firstname) {
            where.firstname = filters.firstname;
        }

        if (filters.lastname) {
            where.lastname = filters.lastname;
        }

        if (filters.maxBirthdate || filters.minBirthdate) {
            where.birthdate = {};

            if (filters.maxBirthdate) {
                where.birthdate[Op.lte] = filters.maxBirthdate;
            }

            if (filters.minBirthdate) {
                where.birthdate[Op.gte] = filters.minBirthdate;
            }

        }
        if (filters.title) {
            include[0].where.title = filters.title
        }

    }
    return author.findAll({ where, include, order: ["lastname", "firstname"] });
};

const findById = (id) => {
    return author.findByPk(id, { include: "books" });
};

const create = (newAuthor) => {
    return author.create(newAuthor,  { include: "books" });
};

const update = (entity) => {
    return entity.save();
};

const remove = (entity) => {
    return entity.destroy();
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};