const userservice = require('../service/userService');

module.exports = {
    createUser: async function(req,res){
        const data = req.body;
        const user = await userservice.createUser({
            name: data.name,
            email: data.email,
            phone: data.phone
        });
        res.json({message: 'User Created', data: user});
    },
    getAllUsers: async function(req,res){
        const users = await userservice.getAllUsers();
        res.json({
            message: 'All users',
            data: users
        });
    },
    updateUsers: async function(req,res){
        const userid = req.params.id;
        const updateduser = req.body;
        const userupdate = await userservice.updateUsers({
            id: userid,
            name: updateduser.name,
            email: updateduser.email,
            phone: updateduser.phone,
        });
        res.json({message: 'User updated', data: userupdate});
    },

    deleteUsers: async function(req,res){
        const userid = req.params.id;
        const userdelete = await userservice.deleteUsers({
            id: userid
        });
       // console.log(userid);
        res.json({message: 'User deleted', data: userdelete});
    }
}