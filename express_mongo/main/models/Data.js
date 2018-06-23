"use strict";
var mongoose = require('mongoose');

var DataSchema = mongoose.Schema({
   x: { type: [Number, Number, Number,Number] , required: true},
   y: { type: [Number, Number, Number,Number] , required: true}
});

DataSchema.statics.list = function (filter,limit,skip,fields,sort, callback) {
  var query = Data.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.select(fields);
  query.sort(sort);
  query.exec(callback);
};


var Data = mongoose.model('Data', DataSchema);




Data.find({$where:"feq(this.x,this.y) >=0.5"}, function (err, datos) {
    if(err) throw err;
    console.log(datos);
});




