const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({

    subject: {
        type: String,
        trim: true,
        required: "Subject is required"
    },
    shoeImages: [String],
    galImages: {
        type: Array
    },
    pullQuote: {
        type: String,
        trim: true,
        required: "Quote is required"
    },
    features: [String],
    storySummary: {
        type: String,
        trim: true,
        required: "Quote is required"
    }
})

let Secret = mongoose.model('Secret', SecretSchema)

module.exports = Secret



