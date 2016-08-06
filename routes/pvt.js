var express = require('express');
var router = express.Router();

router.post('/addProduct', function(req,res){
  var campaignName = req.body.name;
  var ageLower = req.body.agelower;
  var ageHigher = req.body.agehigher;
  var priceLower = req.body.incomelower;
  var priceHigher = req.body.incomehigher;
  var bangalore = req.body.bangalore;
  var chennai = req.body.chennai;
  var delhi = req.body.delhi;
  var mumbai = req.body.mumbai;
  priceLower.replace('.','');
  priceHigher.replace('.','');
  bangalore = bangalore=='on';
  chennai = chennai=='on';
  delhi = delhi=='on';
  mumbai = mumbai=='on';
  var data = {
    isGovt: false,
    campaignName: campaignName,
    ageLower: ageLower,
    ageHigher: ageHigher,
    priceLower: priceLower,
    priceHigher: priceHigher,
    bangalore: bangalore,
    chennai: chennai,
    delhi: delhi,
    mumbai: mumbai
  };
  res.render('chart', data);
});


module.exports = router;
