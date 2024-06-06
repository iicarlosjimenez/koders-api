const createError = require('http-errors')
const Koders = require('../models/koders.model')
const { encrypt } = require('../lib/encrypt')

async function index() {
   const koders = await Koders.find().populate("generation")

   return koders
}

async function store(data) {
   const koderFound = await Koders.findOne({email: data.email})

   if (koderFound)
      throw createError(400, "Email already in use")

   data.password = await encrypt(data.password)

   const koder = await Koders.create(data)
   return koder
}

async function show(id) {
   const koder = await Koders.findById(id)
   return koder
}

async function update(id, data) {
   const koder = await Koders.findByIdAndUpdate(id, data, {
      new: true
   })
   return koder
}

async function destroy(id) {
   await Koders.findByIdAndDelete(id)
   return 
}

module.exports = {
   index,
   store,
   show,
   update,
   destroy
}
