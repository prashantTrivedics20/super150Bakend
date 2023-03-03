const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    Title : {
        type: String,
        required: true,
        maxLength: 25
    },
    date: {
        type: Number,
    },
    Description: {
        type: String,
        required: [true, "You must provide a Description!!"],
    },
    Markdown: {
        type: String,
    }
})

const blog = mongoose.model('blog',schema);
module.exports = blog;