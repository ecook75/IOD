"use strict";
let Models = require("../models"); // matches index.js
const { updateLike, createLike, getLikes } = require("./likeController");
const getComments = (res) => {
// finds all users
Models.Comment.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
const createComment = (data, res) => {
// creates a new user using JSON data POSTed in request body
console.log(data)
new Models.Comment(data).save()
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const updateComment = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new:
true })
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
const deleteLike = (req, res) => {
// deletes the user matching the ID from the param
Models.Like.findByIdAndDelete(req.params.id)
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
// ++ Test updating and deleting a user using Postman


const getLikePosts = (req, res) => {
// finds all posts for a given user and populates with user details
Models.Post.find({likeId: req.params.uid}).populate({path: 'likeId'})
.then((data) => res.send({ result: 200, data: data }))
.catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};


module.exports = {
getLikes, createLike, updateLike, deleteLike, getLikePosts
}