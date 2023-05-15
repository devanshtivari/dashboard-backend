const mongoose = require('mongoose');

const categoryModel = mongoose.Schema({
    addCategory: {type:'string', required: true},
})

const Category = mongoose.model('category', categoryModel);
module.exports = Category;