const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

usersCtrl.createUsers = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created');
};

//usersCtrl.updateUsers = (req, res) => res.json({message: 'User update'});

usersCtrl.deleteUsers= async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json( 'User delete');
};


module.exports = usersCtrl;