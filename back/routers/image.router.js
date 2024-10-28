const express = require('express');
const imageRouter = express.Router();
const imageController = require('../controllers/image.controller')

imageRouter.post('/', imageController.createImage)
imageRouter.get('/:id', imageController.getAllImagesByHeroId)
imageRouter.delete('/:id', imageController.deleteOneImage)
imageRouter.delete('/all/:id', imageController.deleteAllImagesByHeroId)

module.exports = imageRouter