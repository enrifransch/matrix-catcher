require('./config/config');

const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {ScanResult} = require('./models/scanResult');

var app = express();
var port = 3000;

// Middleware.
app.use(bodyParser.json());

// POST /scanResults
app.post('/scanResults', (req, res) => {
    console.log('Request body: ', req.body);
    var scanResult = new ScanResult({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        mobileCountryCode: req.body.mobileCountryCode,
        carrier: req.body.carrier,
        mobileNetworkCode: req.body.mobileNetworkCode,
        band: req.body.band,
        bandWidth: req.body.bandWidth,
        channel: req.body.channel,
        range: req.body.range,
        rLevel: req.body.rLevel,
        locationAreaCode: req.body.locationAreaCode,
        utranCellId: req.body.utranCellId,
        cellId: req.body.cellId,
        baseStationIdentityCode: req.body.baseStationIdentityCode,
        primaryScramblingCode: req.body.primaryScramblingCode,
        updateL: req.body.updateL,
        cathodeRayOscilloscope: req.body.cathodeRayOscilloscope,
        transfersList: req.body.transfersList,
        neighbours: req.body.neighbours
    });
    scanResult.save().then((resp) => {
        console.log('Saving scan registry:\n', JSON.stringify(resp, undefined, 2));
        res.send(resp);
    }, (dbError) => {
        console.log('Error saving new scan registry:\n', JSON.stringify(dbError, undefined, 2));
        res.status(400).send(dbError);
    });
});

// GET /scanResults
app.get('/scanResults', (req, res) => {
    ScanResult.find().then((scanResults) => {
        res.send({
            scanResults
        });
    }, (dbError) => {
        res.status(400).send(dbError);
    });
});

// GET /scanResults/:id
app.get('/scanResults/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    ScanResult.findById(id).then((scanResult) => {
        if (!scanResult) {
            return res.status(404).send();
        }
        res.status(200).send({
            scanResult
        });
    }).catch((dbError) => {
        res.status(400).send(dbError);
    });
});

// DELETE /scanResults/:id
app.delete('/scanResults/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    ScanResult.findByIdAndRemove(id).then((scanResult) => {
        if (!scanResult) {
            return res.status(404).send();
        }
        res.status(200).send({
            scanResult
        });
    }).catch((dbError) => {
        response.status(400).send(dbError);
    });
});

// PATCH /scanResults/:id
app.patch('/scanResults/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }

    // Do something...
    /*var body = _.pick(req.body, ['propperty1', 'propperty2']);
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }*/

    ScanResult.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((scanResult) => {
        if (!scanResult) {
            return res.status(404).send();
        }
        res.status(200).send({
            scanResult
        });
    }).catch((dbError) => {
        res.status(400).send(dbError);
    })
});

// Start listening the specified port.
app.listen(port, () => {
    console.log(`App started on port: ${port}`);
});

// Export the module.
module.exports = {app};