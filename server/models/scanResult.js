var mongoose = require('mongoose');
var ScanResult = mongoose.model('ScanResult', {
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    mobileCountryCode: {
        type: Number,
        required: true
    },
    carrier: {
        type: String,
        require: true
    },
    mobileNetworkCode: {
        type: Number,
        require: true
    }, 
    band: {
        type: Number,
        require: true
    },
    bandWidth: {
        type: Number,
        require: true
    },
    channel: {
        type: Number,
        required: true
    },
    range: {
        type: String,
        require: true
    },
    rLevel: {
        type: Number,
        required: true
    },
    locationAreaCode: {
        type: Number,
        require: true
    },
    utranCellId: {
        type: Number,
        required: true
    },
    cellId: {
        type: String,
        required: true
    },
    baseStationIdentityCode: {
        type: Number,
        required: true
    },
    primaryScramblingCode: {
        type: Number,
        required: true
    },
    updateL: {
        type: Boolean,
        require: true,
        default: false
    },
    cathodeRayOscilloscope: {
        type: String,
        require: true
    },
    transfersList: {
        type: Array,
        require: true,
        default: []
    },
    neighbours: {
        type: Array,
        require: true,
        default: []
    }
});
module.exports = {ScanResult};