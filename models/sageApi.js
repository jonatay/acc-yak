
var config = require('../config/config');

var https = require('https');
var auth = "Basic " + new Buffer(config.sageApi.username + ":" + config.sageApi.password).toString("base64");
var host = 'accounting.sageone.co.za';

var _ = require("underscore");

function performRequest(endpoint, method, data, callback) {
  var dataString = JSON.stringify(data);
  endpoint += '?apiKey={'+config.sageApi.apiKey+'}';
  var headers = {
    // 'Content-Type': 'application/json',
    // 'Content-Length': dataString.length,
    'Authorization': auth
  }
  var options = {
    host: host,
    path: endpoint,
    method: method,
    headers: headers
  };

  var req = https.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      try {
        var responseObject = JSON.parse(responseString);
        callback(null, responseObject);
      } catch (exception) {
        console.log(exception)
        callback({exception : 'malformed json data, check sage one api status', data : responseString}, null);
      }
    });
  });

  req.write(dataString);
  req.end();
}
// performRequest('/api/1.1.1/Company/Get', 'GET', {}, function(data) {
//   console.log('ret:', data);
// });

/* Extend the Underscore object with the following methods */

// Rate limit ensures a function is never called more than every [rate]ms
// Unlike underscore's _.throttle function, function calls are queued so that
//   requests are never lost and simply deferred until some other time
//

_.rateLimit = function(func, rate, async) {
  var queue = [];
  var timeOutRef = false;
  var currentlyEmptyingQueue = false;

  var emptyQueue = function() {
    if (queue.length) {
      currentlyEmptyingQueue = true;
      _.delay(function() {
        if (async) {
          _.defer(function() { queue.shift().call(); });
        } else {
          queue.shift().call();
        }
        emptyQueue();
      }, rate);
    } else {
      currentlyEmptyingQueue = false;
    }
  };

  return function() {
    var args = _.map(arguments, function(e) { return e; }); // get arguments into an array
    queue.push( _.bind.apply(this, [func, this].concat(args)) ); // call apply so that we can pass in arguments as parameters as opposed to an array
    if (!currentlyEmptyingQueue) { emptyQueue(); }
  };
};

// NB Sage API limit is 100 calls per minute, let's go with a delay on 675 ms btw calls

module.exports.callSageAPI = _.rateLimit(performRequest, 675);

