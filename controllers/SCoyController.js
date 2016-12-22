
var sApi = require("../models/sageApi");

module.exports = {
  find : function(params, callback) {
    sApi.callSageAPI('/api/1.1.1/Company/Get', 'GET', {}, function(err, data) {
      if (err) {
        callback(err,null);
        return;
      }
      callback(null, data);
    });
  }
}

// CCoy.find(params, function(err, ccoys) {
//   if (err) {
//     callback(err, null);
//     return;
//   }
//   callback(null, ccoys);
// });
