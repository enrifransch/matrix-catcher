const express = require('express');
const {ObjectID} = require('mongodb');

// Open and close database connection.
var {mongoose} = require('./../db/mongoose');

// Model.
var {Target} = require('./../models/target');

const router = express.Router();

module.exports = () => {
  
  // POST /targets
  router.post('/targets', (req, res) => {
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
  router.get('/targets', (req, res) => {
    Target.find().then((targets) => {
      res.send({
        targets
      });
    }, (dbError) => {
      res.status(400).send(dbError);
    });
  });

  // GET /targets/:id
  router.get('/targets/:id', (req, res) => {
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
  router.delete('/targets/:id', (req, res) => {
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
  router.patch('/targets/:id', (req, res) => {
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

  return router;
}
