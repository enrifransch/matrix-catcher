const express = require('express');
const {
  ObjectID
} = require('mongodb');

// Open and close database connection.
var {
  mongoose
} = require('./../db/mongoose');

// Model.
var {
  Bts
} = require('./../models/bts');

const router = express.Router();

module.exports = () => {

  // POST /bts
  router.post('/btses', (req, res) => {
    console.log('Request body: ', req.body);
    var bts = new Bts({
      SREGION: req.body.SREGION,
      SSITE_ID_UMTS: req.body.SSITE_ID_UMTS,
      SNOMBRE_SITIO_UMTS: req.body.SNOMBRE_SITIO_UMTS,
      SLATITUD: req.body.SLATITUD,
      SLONGITUD: req.body.SLONGITUD,
      SCELLID: req.body.SCELLID,
      SORIGEN_AZIMUTH: req.body.SORIGEN_AZIMUTH,
      SESTATUS: req.body.SESTATUS,
      SMSICD: req.body.SMSICD,
      SBSICD: req.body.SBSICD,
      SLAC: req.body.SLAC,
      SCGI: req.body.SCGI,
      CELLID: req.body.CELLID,
      CELLLAC: req.body.CELLLAC,
      SFRECUENCIA: req.body.SFRECUENCIA,
      SDIRECCION: req.body.SDIRECCION,
      SCIUDAD_COMERCIAL: req.body.SCIUDAD_COMERCIAL,
      SMUNICIPIO: SMUNICIPIO,
      DFECHA_DE_INTEGRACION: req.body.DFECHA_DE_INTEGRACION,
      SLAC_HEX: req.body.SLAC_HEX,
      SID: req.body.SID,
      SGSM_UMTS: req.body.SGSM_UMTS,
      DINSERREG: req.body.DINSERREG,
      DMODIFREG: req.body.DMODIFREG,
      SID_ARCHIVOFUENTE: req.body.SID_ARCHIVOFUENTE
    });
    bts.save().then((result) => {
      console.log('Saving bts registry:\n', JSON.stringify(result, undefined, 2));
      res.send(result);
    }, (dbError) => {
      console.log('Error saving new bts registry:\n', JSON.stringify(dbError, undefined, 2));
      res.status(400).send(dbError);
    });
  });

  // GET /btses
  router.get('/btses', (req, res) => {
    Bts.find().then((btses) => {
      res.send(
        btses
      );
    }, (dbError) => {
      res.status(400).send(dbError);
    });
  });

  // GET /btses/:id
  router.get('/btses/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(400).send();
    }
    Bts.findById(id).then((bts) => {
      if (!bts) {
        return res.status(404).send();
      }
      res.status(200).send({
        bts
      });
    }).catch((dbError) => {
      res.status(400).send(dbError);
    });
  });

  // DELETE /btses/:id
  router.delete('/btses/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(400).send();
    }
    Bts.findByIdAndRemove(id).then((bts) => {
      if (!bts) {
        return res.status(404).send();
      }
      res.status(200).send({
        bts
      });
    }).catch((dbError) => {
      response.status(400).send(dbError);
    });
  });

  // PATCH /btses/:id
  router.patch('/btses/:id', (req, res) => {
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

    Bts.findByIdAndUpdate(id, {
      $set: body
    }, {
      new: true
    }).then((bts) => {
      if (!bts) {
        return res.status(404).send();
      }
      res.status(200).send({
        bts
      });
    }).catch((dbError) => {
      res.status(400).send(dbError);
    })
  });

  return router;
}
