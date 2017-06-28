// MongooseJS enable us to do things easier.

// Require 'mongodb' module.
const {
  ObjectID
} = require('mongodb');

// Require 'mongoose' module.
var mongoose = require('mongoose');

// Tell mongoose to use the promises we know.
mongoose.Promise = global.Promise;

// Set up connection.
mongoose.connect('mongodb://localhost:27017/IMSI');

//var Bts = require('./models/bts');

var mongoose = require('mongoose');
var Bts = mongoose.model('Bts', {
    SREGION : {
        type: String
    },
    SSITE_ID_UMTS : {
        type: String
    },
		SNOMBRE_SITIO_UMTS : {
        type: String
    },
		SLATITUD : {
        type: String
    },
		SLONGITUD : {
        type: String
    },
		SCELLID : {
        type: String
    },
		SORIGEN_AZIMUTH : {
        type: String
    },
		SESTATUS : {
        type: String
    },
		SMSICD : {
        type: String
    },
		SBSICD : {
        type: String
    },
		SLAC : {
        type: String
    },
		SCGI : {
        type: String
    },
		CELLID : {
        type: Number
    },
		CELLLAC : {
        type: Number
    },
		SFRECUENCIA : {
        type: String
    },
		SDIRECCION : {
        type: String
    },
		SCIUDAD_COMERCIAL : {
        type: String
    },
		SMUNICIPIO : {
        type: String
    },
		DFECHA_DE_INTEGRACION : {
        type: String
    },
		SLAC_HEX : {
        type: String
    },
		SID : {
        type: String
    },
		SGSM_UMTS : {
        type: String
    },
		DINSERREG : {
        type: String
    },
		DMODIFREG : {
        type: String
    },
		SID_ARCHIVOFUENTE : {
        type: String
    }
});

var btsRaw = require('./bases-unicas');

console.log(btsRaw.length);
var i = 0;
btsRaw.forEach(function (element) {
  var bts = new Bts(element);
  bts.save().then((result) => {
    console.log('Saved bts: ', result);
    console.log(i);
    i++;
  }, (dbError) => {
    console.log('Uanble to save bts: ', dbError);
  });
}, this);



// Close connection.
mongoose.connection.close();
