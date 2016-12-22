var mongoose = require('mongoose');

var SAccSchema = new mongoose.Schema({
 Name: String,
  Category: {
    Comment: String,
    Order: Number,
    Description: String,
    ID: Number,
    Modified: Date,
    Created: Date
  },
  Active: Boolean,
  Balance: Number,
  Description: String,
  UnallocatedAccount: Boolean,
  IsTaxLocked: Boolean,
  Modified: Date,
  Created: Date,
  AccountType: Number,
  HasActivity: Boolean,
  DefaultTaxTypeId: Number,
  DefaultTaxType: {
    ID: Number,
    Name: String,
    Percentage: Number,
    IsDefault: Boolean,
    HasActivity: Boolean,
    IsManualTax: Boolean,
    Created: Date,
    Modified: Date
  },
  ID: Number
})

module.exports = mongoose.model('SAccSchema')