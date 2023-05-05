const express = require('express')
const prodController = require('../controllers/ProductsController');

const router = express.Router({mergeParams: true});

router.get('/', prodController.get);

router.get('/:id', prodController.getbyid);

router.post('/', prodController.post);

router.put('/:id',prodController.put);

router.delete('/:id',prodController.delete);

module.exports = router;