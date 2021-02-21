const express = require('express');
const app = express();
const bodyParser = require("body-parser");
import { Convert } from "mongo-image-converter";
 import React, { useState } from "react";

app.use(bodyParser.json({ limit: "16mb", extended: true })); // Make sure you add these two lines
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true })); //Make sure you add these two lines

mongoose
  .connect(uri, {
    // pay attention to URI
    dbName: "ballyhoo", // pay attention here
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected-to-DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const convertImage = async (event) => {
  try {
    const convertedImage = await Convert(imageFile);
    if (convertedImage) {
      console.log(convertedImage);
    } else {
      console.log("The file is not in format of image/jpeg or image/png");
    }
  } catch (error) {
    console.warn(error.message);
  }
};

import React, {useState} from 'react';

    const [imageFile, setImageFile] = useState('');

    function App() {
            const convertImage = async (event) => {
            try {
                    const convertedImage = await Convert(imageFile)
                    if( convertedImage ){
                            console.log(convertedImage);
                            // after this pass it to the backend using your fav API,
                    } else{
                            console.log('The file is not in format of image/jpeg or image/png')
                     }
                    }
            catch (error) {
                    console.warn(error.message)
                    }
                    }

        return(
        <input type = 'file' onChange = {(e) => setImageFile( e.target.files[0] ) } />
        <button onClick = { convertImage } > Submit </ button>
    )}

export default App;

// Using the retrived data
// The retrived data from the DataBase should be filtered for the correct field and set as a source to an image

//     and set them to the source of an Image using the regular Methods in REACT and ANGULAR

//     < img src = {The data pulled and filtered pointing the dataURL of the image} >


// const multer = require("multer");
// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });
// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "demo",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }],
// });

// const parser = multer({ storage: storage });
// app.post("/api/images", parser.single("image"), (req, res) => {
//   console.log(req.file); // to see what is returned to you
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image) // save image information in database
//     .then((newImage) => res.json(newImage))
//     .catch((err) => console.log(err));
// });