// imports
const express = require('express');
const router = express.Router();

// models 
const models = require('../models');

// GET api/investments/test (Public)
router.get('/investmentsTest', (req, res) => {
    res.json({ msg: 'User endpoint OK!'});
});

// all investments
router.get('/myInvestments', (req, res) => {
    models.Investment.find().then((foundInvestments) => {
      res.status(200).json({ investments: foundInvestments })
    })
    .catch((error) => res.send({ error }))
})

// get by Id
router.get('/:id', (req, res) => {
    models.Investment.findOne({_id: req.params.id}).then((investment) => {
      res.status(200).json({ investment })
    })
    .catch((error) => res.send({ error }))
})

// POST api/expenses/new (Public)
router.post('/new', (req, res) => {
    models.Investment.create(req.body).then((investment) => {
      res.status(201).json({ investment })
    })
    .catch((error) => res.send({ error }))
});

// PUT route for expenses
router.put('/:id', (req, res) => { 
    const { name, amount } = req.body
    models.Investment.update({
      _id: req.params.id
    }, {$set: {
        name, 
        amount 
    }})
    .then((investment) => {
      res.status(201).json({ investment })
    })
    .catch((error) => res.send({ error }))
})

// delete
router.delete('/:id', (req, res) => {
    models.Investment.deleteOne({ _id: req.params.id })
    .then((investment) => res.status(201).json({ investment }))
    .catch((error) => res.send({ error }))
})

module.exports = router; 