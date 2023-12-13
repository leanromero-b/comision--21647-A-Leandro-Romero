const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    titulo: String,
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
    },
});

const PostModel = model('post', postSchema);

module.exports = PostModel;
