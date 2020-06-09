const mongoose = require('mongoose')

const {MONGODB_HOST, MONGODB_DATABASE} = process.env;
const MONGODB_URL = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));