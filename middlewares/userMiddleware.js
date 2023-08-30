const UserService = require('../service/userService');
module.exports = {
    validateUser: function(req, res, next) {
        const data = req.body;
        if(data.name == '' || data.name == null || data.name == undefined) {
            res.json({
                message: 'Invalid name of the user.'
            });
            return;
        }
        next();
    },
    validateUniqueEmail: async function(req, res, next) {
        const data = req.body;
        
        if(data.email) {
            // check if the email is unique
            const user = await UserService.getUserByEmail({
                email:data.email
            });
            if(user) {
                res.status(409).json({message: 'User already exist with the email address.'});
                return;
            }
        } 
        next();
    }
}