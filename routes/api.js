var express = require('express');
var router = express.Router();
var CCoyController = require('../controllers/CCoyController');
var SCoyController = require('../controllers/SCoyController');


// ** standard callback w fail/success handling
var _routeCallback = function (err, result) {

}

//  ** route for /:resource **
router.get('/:resource', function (req, res, next) {

  var resource = req.params.resource;

  if (resource == 'ccoy') {
    CCoyController.find(req.query, function (err, result) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result: result
      });
    });
  }

  if (resource == 'scoy') {
    SCoyController.find(req.query, function (err, data) {
      if (err) {
        res.send(err.data)
        return;
      }
      res.json({
        confirmation: 'success',
        result: data
      })
    });
  }

});

//  ** route for /:resource/:id **
router.get('/:resource/:id', function (req, res, next) {

  var resource = req.params.resource;
  var id = req.params.id;

  if (resource == 'ccoy') {
    CCoyController.findById(id, function (err, result) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: 'Not Found'
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result: result
      });
    });
  }

});

//  ** route for  /:resource **
router.post('/:resource', function (req, res, next) {
  var resource = req.params.resource;

  if (resource == 'ccoy') {
    CCoyController.create(req.body, function (err, result) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result: result
      });
    });
  }
});

module.exports = router;
