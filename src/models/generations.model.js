const mongoose = require('mongoose')
const modelName = 'generations'
const schema = new mongoose.Schema({
   number: {
      type: Number,
      required: true,
      min: 1,
      max: 100
   },
   program: {
      type: String,
      required: true,
      enum: ['javascript', 'python', 'ios', 'andriod']
   },
   startDate: {
      type: Date,
      required: true
   },
   koders: [
      {
         type: mongoose.Types.ObjectId,
         ref: "koders"
      }
   ]
})

module.exports = mongoose.model(modelName, schema)