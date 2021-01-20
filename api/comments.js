// imports
const express = require('express');
const router = express.Router();

// models 
const models = require('../models');

// all comments
router.get('/all', (req, res) => {
    models.Comment.find().then((foundComments) => {
      res.status(200).json({ comments: foundComments })
    })
    .catch((error) => res.send({ error }))
})

// get by Id
router.get('/:id', (req, res) => {
    models.Comment.findOne({_id: req.params.id}).then((comment) => {
      res.status(200).json({ comment })
    })
    .catch((error) => res.send({ error }))
})

// POST api/comments/new (Public)
router.post('/new', (req, res) => {
    models.Comment.create(req.body.comments).then((comment) => {
      res.status(201).json({ comment })
    })
    .catch((error) => res.send({ error }))
});

// PUT route for expenses
router.put('/:id', (req, res) => { 
    const { comments } = req.body
    models.Comment.update({
      _id: req.params.id
    }, {$set: {
        comments
    }})
    .then((comment) => {
      res.status(201).json({ comment })
    })
    .catch((error) => res.send({ error }))
});

// delete
router.delete('/:id', (req, res) => {
    models.Comment.deleteOne({ _id: req.params.id })
    .then((comment) => res.status(201).json({ comment }))
    .catch((error) => res.send({ error }))
})


module.exports = router;