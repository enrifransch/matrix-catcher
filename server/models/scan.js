var mongoose = require('mongoose');
var Scan = mongoose.model('Scan', {
    dateTime: {
        type: Date,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: false
    },
    scanFilters: { // Tiene que ser un array de filtros y no un string
        type: Array,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});
module.exports = {Scan};