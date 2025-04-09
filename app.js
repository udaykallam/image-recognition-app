require("dotenv").config();
const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

AWS.config.update({
    accessKeyId: 'accesskey',
    secretAccessKey: 'secretkey',
    region: 'ap-southeast-1'
});


const rekognition = new AWS.Rekognition();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('image');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { error: null, labels: [] });
});

app.post('/upload', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.render('index', { error: err.message, labels: [] });
        } else if (err) {
            return res.render('index', { error: 'Error uploading file', labels: [] });
        }

        const image = req.file;
        if (image) {
            const imagePath = image.path;
            const imageBuffer = fs.readFileSync(imagePath);
            const params = {
                Image: {
                    Bytes: imageBuffer
                }
            };

            rekognition.detectLabels(params, (err, data) => {
                if (err) {
                    console.log(err, err.stack);
                    res.render('index', { error: 'Error analyzing image', labels: [] });
                } else {
                    res.render('index', { error: null, labels: data.Labels });
                }
            });
        } else {
            res.render('index', { error: 'Please upload an image file', labels: [] });
        }
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
    