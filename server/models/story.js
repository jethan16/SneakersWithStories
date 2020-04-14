const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: "title is required"
    },
    name: {
        type: String,
        trim: true,
        required: "name is required"
    },
    silhouette: String,
    shoeImages: [String],
    galImages: [String],
    pullQuote: {
        type: String,
        trim: true,
        required: "Quote is required"
    },
    highlights: [String],
    storySummary: {
        type: String,
        trim: true,
        required: "story is required"
    }
})

let Stories = mongoose.model('Secret', SecretSchema)

module.exports = Stories;



