const createHttpError = require("http-errors")
const jwt = require('../lib/jwt')
const koderUseCase = require('../usecases/koders.usecase')

async function auth(request, response, next) {
   try {
      const token = request.headers.authorization

      if (!token)
         throw createHttpError(401, "Token is required")

      const payload = jwt.verify(token)
      const user = await koderUseCase.show(payload.id)

      request.user = user

      next()
   } catch (error) {
      response.status(error.status || 500)
      response.json({
         success: false,
         error: error.message
      })
   }
}

module.exports = auth