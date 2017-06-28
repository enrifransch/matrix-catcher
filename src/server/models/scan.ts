import * as mongoose from 'mongoose';

import { IScan } from './../../shared/models/IScan';

interface ISCanModel extends IScan, mongoose.Document {}

const scanSchema = new mongoose.Schema({
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

export const Scan = mongoose.model<ISCanModel>("Scan", scanSchema);