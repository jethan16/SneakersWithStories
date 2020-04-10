const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
    message: {
        type: String,
        trim: true,
        default: 'The clock tolls twice at midnight on the next full moon'
    }
})

let Secret = mongoose.model('Secret', SecretSchema)

module.exports = Secret

let storage = [
    {
      subject: `Dean Adcock`,
      shoeImages: [Panthers_1, Panthers_2, Panthers_3, Panthers_4, Panthers_5],
      galImages: [img1],
      pullQuote: "Dean was always the life of the party.",
      features: [
        "Watermark signatures",
        `Dean's signature`,
        `Hand painted Panther's logo`,
      ],
      storySummary:
        "Dean was the coolest guy around. Everyone loved him and he was the nicest person you could ever meet.",
      shoeType: "Air Monarchs",
      theme: {
        bgColor: "#00a5ff",
      },
    },
    {
      subject: `Scott Brinkley`,
      shoeImages: [
        Panthers_1,
        "/images/shoes/2_Panthers/Panthers_2.jpg",
        "/images/shoes/2_Panthers/Panthers_3.jpg",
        "/images/shoes/2_Panthers/Panthers_4.jpg",
        "/images/shoes/2_Panthers/Panthers_5.jpg",
        "/images/shoes/2_Panthers/Panthers_6.jpg",
      ],
      pullQuote: "Scott is a brilliant artist and cinema fanatic.",
      features: [
        "Buzz Lightyear themed",
        `Andy's name on the bottom`,
        `Custom laces`,
      ],
      storySummary: "Scott emodies eccentricity in the best way possible. ",
      shoeType: "Converse lo-tops",
      theme: {
        bgColor: "green",
      },
    },
    {
      subject: `Tinley So-and-So`,
      shoeImages: [
        Panthers_1,
        "/images/shoes/2_Panthers/Panthers_2.jpg",
        "/images/shoes/2_Panthers/Panthers_3.jpg",
        "/images/shoes/2_Panthers/Panthers_4.jpg",
        "/images/shoes/2_Panthers/Panthers_5.jpg",
        "/images/shoes/2_Panthers/Panthers_6.jpg",
      ],
      pullQuote: "She deserved a great shoe.",
      features: ["Water theme", `cool artz`, `pretty laces`],
      storySummary: "She seems neat",
      shoeType: "Nike Air",
      theme: {
        bgColor: "purple",
      },
    },
  ];

