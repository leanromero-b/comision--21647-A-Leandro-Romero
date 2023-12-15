const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    titulo: String,
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        // requiered: true,
    },
});

const PostModel = model('post', postSchema);

module.exports = PostModel;
