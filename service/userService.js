const models = require('../models/index');
module.exports = {
    createUser: async function({name,email,phone}){
        return await models.User.create({
            name: name,
            email: email,
            phone: phone
        });

    },
    getAllUsers: async function() {
        return await models.User.findAll();
    },
    updateUsers: async function({id,name,email,phone}){
        return await models.User.update({
        //    id: id,
           name: name,
           email: email,
           phone: phone 
        }, {
            where: {
                id : id
            }
        }
    )
    },
    deleteUsers: async function({id}){
        console.log(id);
        return await models.User.destroy({
            where: {
                id: id
            }
        });
    },
    getUserByEmail: async function({email}){
        return await models.User.findOne({
            where: {
                email: email
            }
        });
    }
}