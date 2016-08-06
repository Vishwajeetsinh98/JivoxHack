var express = require('express');
var router = express.Router();

router.post('/addProduct', function(req,res){
  var campaignName = req.body.name;
  var category = req.body.category;
  var ageLower = req.body.agelower;
  var ageHigher = req.body.agehigher;
  var priceLower = req.body.pricelower;
  var priceHigher = req.body.pricehigher;
  var bangalore = req.body.bangalore;
  var chennai = req.body.chennai;
  var delhi = req.body.delhi;
  var mumbai = req.body.mumbai;

  var data = {
    isGovt: false,
    campaignName: campaignName,
    category: category,
    ageLower: ageLower,
    ageHigher: ageHigher,
    priceLower: priceLower,
    priceHigher: priceHigher,
    bangalore: bangalore,
    chennai: chennai,
    delhi: delhi,
    mumbai: mumbai
  };
  res.json(data);
});

router.get('/chart',function(req,res){
  res.render('chartPrivate');
});

module.exports = router;
