const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investmentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    }
})


module.exports = Investment = mongoose.model('Investment', investmentSchema);