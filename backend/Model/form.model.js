const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
      quesCategory: String,
      ansCategory: String,
      quesCloze: String,
      ansCloze: Array,
      quesComprehension: String,
      optionComprehension: Array,
      ansComprehension: String
}, {
    versionKey:false
});


const formModel = mongoose.model("forms", formSchema);

module.exports = {
    formModel
}


