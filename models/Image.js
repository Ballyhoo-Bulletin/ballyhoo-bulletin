mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
    url: { type: String },
    text: { type: String },
  },
  // uploadDate: { type: Date, default: Date.now },
});

// var imageSchema = new Schema({
//   url: { type: String },
//   text: { type: String },
// });

const imagesSchema = new Schema({
  images: [imageSchema],
});

const postSchema = new Schema({
  imagePost: [imagesSchema],
});

//Image is a model which has a schema imageSchema
module.exports = new mongoose.model("Image", imageSchema);
// module.exports = new mongoose.model("Post", postSchema);
