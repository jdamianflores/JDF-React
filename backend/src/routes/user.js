const { Router } = require('express');
const router = Router();

const {getUsers, createUsers, deleteUsers, updateUsers} = require('../controllers/userController')

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    //.put(updateUsers)
    .delete(deleteUsers)

module.exports = router;
