const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    ocupation: String,
    catchphrase: String
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;