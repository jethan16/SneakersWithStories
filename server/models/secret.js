const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "title is required",
  },
  name: {
    type: String,
    trim: true,
    required: "name is required",
  },
  silhouette: String,
  shoeImages: [String],
  galImages: [String],
  pullQuote: {
    type: String,
    trim: true,
    required: "Quote is required",
  },
  highlights: [String],
  storySummary: {
    type: String,
    trim: true,
    required: "story is required",
  },
});

class newStory {
  constructor({
    title,
    name,
    silhouette,
    shoes,
    gallery,
    quote,
    highlights,
    summary,
  }) {
    this.title = title;
    this.name = name;
    this.silhouette = silhouette;
    this.shoes = shoes;
    this.gallery = gallery;
    this.quote = quote;
    this.highlights = highlights;
    this.summary = summary;
  }
}

SecretSchema.loadClass(newStory);

let Secret = mongoose.model("Secret", SecretSchema);

module.exports = Secret;
