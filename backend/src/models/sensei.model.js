const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(sensei) {
        const id = uuidv4();

        sensei.id = id;
        await connection("sensei").insert(sensei);
        return id;
    },

    async getById(id) {
        const result = await connection("sensei")
            .where({id})
            .select("*")
            .first();

        return result;
    },
    
    async updateById(id, sensei) {
        const result = await connection("sensei").where({id}).update(sensei);
        return result;
    },
    
    async deleteById(id) {
        const result = await connection("sensei").where({id}).delete();
        return result;
    }
}