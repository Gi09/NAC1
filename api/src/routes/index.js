'use strict'

const express = require('express')

const router = new express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"Giovanna Sayuri"
    });
});

module.exports = router;