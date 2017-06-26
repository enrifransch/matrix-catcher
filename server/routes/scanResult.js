const express = require('express');
const {ObjectID} = require('mongodb');

// Open and close database connection.
var {mongoose} = require('./../db/mongoose');

// Model.
var {ScanResult} = require('./../models/scanResult');

const router = express.Router();

module.exports = () => {
  
  // POST /scanResults
  router.post('/scanResults', (req, res) => {
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
  router.get('/scanResults', (req, res) => {
    ScanResult.find().then((scanResults) => {
      res.send({
        scanResults
      });
    }, (dbError) => {
      res.status(400).send(dbError);
    });
  });

  // GET /scanResults/:id
  router.get('/scanResults/:id', (req, res) => {
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
  router.delete('/scanResults/:id', (req, res) => {
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
  router.patch('/scanResults/:id', (req, res) => {
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

  return router;
}
