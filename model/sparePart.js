const mongoose = require('mongoose');

const sparePartModel = mongoose.Schema({
    sparePartModel: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    sparePartModelVersion: {
        type: String,
        require: true
    }
});

mongoose.model("sparePartModel", sparePartModel);

