const Posts = require('../models/Posts');

module.exports = {
    newPost: async (req, res) => {
        try {
            const post = new Posts(req.body);
            await post.validate();
            const result = await post.save();
            res.status(201).send({success: true, result: result});
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).send(err.errors.content.message);
            }
            console.error(err);
            res.status(422).send({success: false, reason: err});
        }
    },

    updatePost: async (req, res) => {
        try {
            const result = await Posts.findOneAndUpdate({ _id: req.body._id }, req.body, {
                new: true,
                runValidators: true
            })

            res.status(200).send({result: result})
          } catch (err) {
            console.error(err);
            res.status(500).send({success: false});
          }
    },

    deletePost: async (req, res) => {
        try {
            const result = await Posts.deleteOne({ _id: req.body._id });
            res.send({result: result});
        } catch (err) {
            console.error(err);
            res.status(500).send({success: false});
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await Posts.find();
            res.send({success: true, result: posts});
          } catch (err) {
            console.error(err);
            res.send({success: false, result: err})
          }
    }
}