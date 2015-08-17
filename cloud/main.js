require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
var mlog = require('cloud/mlog');
var mutil = require('cloud/mutil');
var muser = require('cloud/muser');
var madd = require('cloud/madd');
var mgroup = require('cloud/mgroup.js');
var msign = require('cloud/msign.js');
var mqiniu = require('cloud/mqiniu');
var mchat = require('cloud/mchat');

AV.Cloud.define("_receiversOffline", mchat.receiversOffline);