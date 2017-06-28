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
module.exports = {Bts};