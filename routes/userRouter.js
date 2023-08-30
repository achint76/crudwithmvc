const express = require('express');
const Router = express.Router();
const UserController = require('../controller/userController');
const UserMiddleware = require('../middlewares/userMiddleware');

Router.post('/create-user', [UserMiddleware.validateUser, UserMiddleware.validateUniqueEmail], 
 UserController.createUser);
Router.get('/getusers', UserController.getAllUsers);
Router.put('/update-user/:id', [UserMiddleware.validateUser, UserMiddleware.validateUniqueEmail],
UserController.updateUsers);
Router.delete('/delete-user/:id', UserController.deleteUsers);
module.exports = Router;