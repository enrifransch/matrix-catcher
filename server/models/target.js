var mongoose = require('mongoose');
var Target = mongoose.model('Target', {
    name: {
        type: String,
        required: true
    },
    group: {
        type: String
    },
    mission: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String
    },
    picture: {
        type: String,
    },
    locations: {
        type: Array
    },
    imsi: {
        type: Number
    },
    imei: {
        type: Number
    },
    carrier: {
        type: String
    },
    tmsi: {
        type: Number
    },
    msisdn: {
        type: Number
    },
    whiteList: {
        type: Boolean,
        required: true
    },
    autoClone: {
        type: Boolean,
        required: true
    },
    autoCall: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String
    }
});
module.exports = {Target};