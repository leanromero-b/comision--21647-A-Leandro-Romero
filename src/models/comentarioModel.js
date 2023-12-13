const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
    }
});

const comentarioModel = model('comentario', comentarioSchema);

module.exports = comentarioModel;