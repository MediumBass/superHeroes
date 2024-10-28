const express = require('express');
const heroRouter = express.Router();
const heroController = require('../controllers/hero.controller')

heroRouter.post('/', heroController.createHero)
heroRouter.get('/', heroController.getAllHeroes)
heroRouter.put('/:id', heroController.updateHero)
heroRouter.delete('/:id', heroController.deleteHero)
heroRouter.get('/:id', heroController.getOneHero)

module.exports = heroRouter