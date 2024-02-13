const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    //res.json(users)
    res.json({users})//para mejor estructura Objeto Users
};

usersCtrl.createUsers = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created');
};

usersCtrl.deleteUsers= async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json( 'User delete');
};


module.exports = usersCtrl;