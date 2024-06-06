const express = require('express')
const koderCase = require('../usecases/koders.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

// Index
router.get("/", auth, async (request, response) => {
   try {
      const koders = await koderCase.index()
      response.json({
         sucess: true,
         data: {
            koders
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
router.post('/', async (request, response) => {
   try {
      const koder = await koderCase.store(request.body)
      response.json({
         success: true,
         data: {
            koder
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

// show
router.get('/:id', auth, async (request, response) => {
   try {
      const { id } = request.params
      const koder = await koderCase.getById(id)
      response.json({
         success: true,
         data: {
            koder
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

// update
router.patch('/:id', auth, async (request, response) => {
   try {
      const { id } = request.params
      const koder = await koderCase.updateById(id, request.body)
      response.json({
         sucess: true,
         data: {
            koder
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

// destroy
router.delete("/:id", auth, async (request, response) => {
   try {
      const { id } = request.params
      await koderCase.destroy(id)
      response.json({
         sucess: true,
         data: {

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

module.exports = router;