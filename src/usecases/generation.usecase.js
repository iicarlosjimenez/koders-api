const createError = require('http-errors')
const Generations = require('../models/generations.model')

async function index() {
   const generations = await Generations.find()

   return generations
}

async function store(data) {
   const generationFound = await Generations.findOne({ number: data.number })

   if (generationFound)
      throw createError(400, "Generation already in use")

   const koder = await Generations.create(data)
   return koder
}

module.exports = {
   index,
   store
}
