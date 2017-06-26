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
        required: true
    },
    mobileNetworkCode: {
        type: Number,
        required: true
    }, 
    band: {
        type: Number,
        required: true
    },
    bandWidth: {
        type: Number,
        required: true
    },
    channel: {
        type: Number,
        required: true
    },
    range: {
        type: String,
        required: true
    },
    rLevel: {
        type: Number,
        required: true
    },
    locationAreaCode: {
        type: Number,
        required: true
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
        required: true,
        default: false
    },
    cathodeRayOscilloscope: {
        type: String,
        required: true
    },
    transfersList: {
        type: Array,
        required: true,
        default: []
    },
    neighbours: {
        type: Array,
        required: true,
        default: []
    }
});
module.exports = {ScanResult};