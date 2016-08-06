var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Private');
});

router.post('/addProduct', function(req,res){
  var campaignName = req.body.name;
  var category = req.body.category;
  var ageLower = req.body.agelower;
  var ageHigher = req.body.agehigher;
  var priceLower = req.body.pricelower;
  var priceHigher = req.body.pricehigher;
  var location1 = req.body.location1;
  var location2 = req.body.location2;
  var location3 = req.body.location3;
  var location4 = req.body.location4;
  var data = {
    isGovt: false,
    campaignName: campaignName,
    category: category,
    ageLower: ageLower,
    ageHigher: ageHigher,
    priceLower: priceLower,
    priceHigher: priceHigher,
    location1: location1,
    location2: location2,
    location3: location3,
    location4: location4
  };
  res.json(data);
});

router.get('/chart',function(req,res){
  res.render('chartPrivate');
});

module.exports = router;
