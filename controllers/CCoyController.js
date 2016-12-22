var CCoy = require('../models/CCoy');

module.exports = {

    create: function(params, callback) {
        CCoy.create(params, function(err, ccoy) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, ccoy);
        });
    },

    find: function(params, callback) {
        CCoy.find(params, function(err, ccoys) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, ccoys);
        });
    },

    findById: function(id, callback) {
        CCoy.findById(id, function(err, ccoy) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, ccoy);
        });
    },

    update: function() {
        CCoy.update(params, function(err, ccoy) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, ccoy);
        });
    },

    delete: function() {
        // body...
    },



}