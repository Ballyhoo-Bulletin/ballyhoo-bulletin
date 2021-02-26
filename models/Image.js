mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  // desc: String,
  image: {
    data: Buffer,
    contentType: String,
  },
  imageId: {
    type: String,
  },
  imageUrl: { type: String },
  // text: { type: String },

  // uploadDate: { type: Date, default: Date.now },
});

const imagesSchema = new Schema({
  loadImages: [imageSchema],
});

// const postSchema = new Schema({
//   imagePost: [imagesSchema],
// })

// Image is a model which has a schema imageSchema
module.exports = new mongoose.model("Image", imagesSchema);
// module.exports = new mongoose.model("Post", postSchema);
