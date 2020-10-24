var Users = require('./users.dao');

exports.createUser = function (req, res, next) {
    var user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        profileImageUrl:req.body.profileImageUrl
    };

    Users.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero created successfully"
        })
    })
}

exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json(users)
    })
}

exports.getUser = function(req, res, next) {
    Users.get({_id: req.params.id}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json(users[0])
    })
}

exports.updateUser = function(req, res, next) {
    var user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        profileImageUrl:req.body.profileImageUrl
    }
    Users.update({_id: req.params.id}, user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

exports.removeUser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero deleted successfully"
        })
    })
}
