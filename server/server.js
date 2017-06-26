require('./config/config');

const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {ScanResult} = require('./models/scanResult');
var {Scan} = require('./models/scan');
var {Target} = require('./models/target');

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
    scanResult.save().then((result) => {
        console.log('Saving scanResult registry:\n', JSON.stringify(result, undefined, 2));
        res.send(result);
    }, (dbError) => {
        console.log('Error saving new scanResult registry:\n', JSON.stringify(dbError, undefined, 2));
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

// POST /scans
app.post('/scans', (req, res) => {
    console.log('Request body: ', req.body);
    var scan = new Scan({
        dateTime: new Date(),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        mission: req.body.mission,
        scanFilters: req.body.scanFilters,
        notes: req.body.notes
    });
    scan.save().then((result) => {
        console.log('Saving scan registry:\n', JSON.stringify(result, undefined, 2));
        res.send(result);
    }, (dbError) => {
        console.log('Error saving new scan registry:\n', JSON.stringify(dbError, undefined, 2));
        res.status(400).send(dbError);
    });
});

// GET /scans
app.get('/scans', (req, res) => {
    Scan.find().then((scans) => {
        res.send({
            scans
        });
    }, (dbError) => {
        res.status(400).send(dbError);
    });
});

// GET /scans/:id
app.get('/scans/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Scan.findById(id).then((scan) => {
        if (!scan) {
            return res.status(404).send();
        }
        res.status(200).send({
            scan
        });
    }).catch((dbError) => {
        res.status(400).send(dbError);
    });
});

// DELETE /scan/:id
app.delete('/scans/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Scan.findByIdAndRemove(id).then((scan) => {
        if (!scan) {
            return res.status(404).send();
        }
        res.status(200).send({
            scan
        });
    }).catch((dbError) => {
        response.status(400).send(dbError);
    });
});

// PATCH /scanResults/:id
app.patch('/scans/:id', (req, res) => {
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

    Scan.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((scan) => {
        if (!scan) {
            return res.status(404).send();
        }
        res.status(200).send({
            scan
        });
    }).catch((dbError) => {
        res.status(400).send(dbError);
    })
});













// POST /targets
app.post('/targets', (req, res) => {
    console.log('Request body: ', req.body);
    var target = new Target({
        name: req.body.name,
        group: req.body.group,
        mission: req.body.mission,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        picture: req.body.picture,
        locations: req.body.locations,
        imsi: req.body.imsi,
        imei: req.body.imei,
        carrier: req.body.carrier,
        tmsi: req.body.tmsi,
        msisdn: req.body.msisdn,
        whiteList: req.body.whiteList,
        autoClone: req.body.autoClone,
        autoCall: req.body.autoCall,
        notes: req.body.notes
    });
    target.save().then((result) => {
        console.log('Saving target registry:\n', JSON.stringify(result, undefined, 2));
        res.send(result);
    }, (dbError) => {
        console.log('Error saving new target registry:\n', JSON.stringify(dbError, undefined, 2));
        res.status(400).send(dbError);
    });
});

// GET /targets
app.get('/targets', (req, res) => {
    Target.find().then((targets) => {
        res.send({
            targets
        });
    }, (dbError) => {
        res.status(400).send(dbError);
    });
});

// GET /targets/:id
app.get('/targets/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Target.findById(id).then((target) => {
        if (!target) {
            return res.status(404).send();
        }
        res.status(200).send({
            target
        });
    }).catch((dbError) => {
        res.status(400).send(dbError);
    });
});

// DELETE /targets/:id
app.delete('/targets/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Target.findByIdAndRemove(id).then((target) => {
        if (!target) {
            return res.status(404).send();
        }
        res.status(200).send({
            target
        });
    }).catch((dbError) => {
        response.status(400).send(dbError);
    });
});

// PATCH /targets/:id
app.patch('/targets/:id', (req, res) => {
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

    Target.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((target) => {
        if (!target) {
            return res.status(404).send();
        }
        res.status(200).send({
            target
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