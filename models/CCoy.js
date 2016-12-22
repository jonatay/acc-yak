var mongoose = require('mongoose');

var CCoySchema = new mongoose.Schema({
	name: String,
	cubit_code: String,
	sage_coy_id : Number,
	sage_coy_name : String
})

module.exports = mongoose.model('CCoySchema', CCoySchema);