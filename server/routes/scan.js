const express = require('express');
const {ObjectID} = require('mongodb');

// Open and close database connection.
var {mongoose} = require('./../db/mongoose');

// Model.
var {Scan} = require('./../models/scan');

const router = express.Router();

module.exports = () => {
  
  // POST /scans
  router.post('/scans', (req, res) => {
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
  router.get('/scans', (req, res) => {
    Scan.find().then((scans) => {
      res.send(
        scans
      );
    }, (dbError) => {
      res.status(400).send(dbError);
    });
  });

  // GET /scans/:id
  router.get('/scans/:id', (req, res) => {
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
  router.delete('/scans/:id', (req, res) => {
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

  // PATCH /scans/:id
  router.patch('/scans/:id', (req, res) => {
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

  return router;
}
