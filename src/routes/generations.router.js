const express = require('express')
const generationCase = require('../usecases/generation.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

// Index
router.get("/", auth, async (request, response) => {
   try {
      const generations = await generationCase.index()
      response.json({
         sucess: true,
         data: {
            generations
         }
      })
   } catch (error) {
      response.status(error.status || 500);
      response.json({
         success: false,
         error: error.message,
      })
   }
})

// store
router.post('/', auth, async (request, response) => {
   try {
      const generation = await generationCase.store(request.body)
      response.json({
         success: true,
         data: {
            generation
         }
      })
   } catch (error) {
      response.status(error.status || 500);
      response.json({
         success: false,
         error: error.message,
      })
   }
})

module.exports = router