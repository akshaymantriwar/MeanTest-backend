var express = require('express');
var router = express.Router();
var Users = require('../api/users.controller');

/* GET users listing. */
router.get('/', Users.getUsers);
router.get('/:id', Users.getUser);
router.post('/', Users.createUser);
router.put('/:id', Users.updateUser);
router.delete('/:id', Users.removeUser);

module.exports = router;
