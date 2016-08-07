var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public" ));


//The AddProduct Route for Govt Use, Takes the Initial Values of Filters
//renders the graphs in the next page
router.post('/addProduct', function(req,res){
  var campaignName = req.body.name;
  var ageLower = req.body.agelower;
  var ageHigher = req.body.agehigher;
  var incomeLower = req.body.incomelower;
  var incomeHigher = req.body.incomehigher;
  var maleFilter = req.body.male;
  var femaleFilter = req.body.female;
  var bangalore = req.body.bangalore;
  var chennai = req.body.chennai;
  var delhi = req.body.delhi;
  var mumbai = req.body.mumbai;
  var sexFilter = req.body.sexfilter;
  var category = req.body.category;

  incomeLower.replace('.','');
  incomeHigher.replace('.','');
  bangalore = bangalore=='on';
  chennai = chennai=='on';
  delhi = delhi=='on';
  mumbai = mumbai=='on';

  var data = {
    isGovt: true,
    campaignName: campaignName,
    ageLower: ageLower,
    ageHigher: ageHigher,
    priceLower: incomeLower,
    priceHigher: incomeHigher,
    maleFilter: maleFilter,
    femaleFilter: femaleFilter,
    bangalore: bangalore,
    chennai: chennai,
    delhi: delhi,
    mumbai: mumbai,
    maleFilter: sexFilter==1 || sexFilter==3,
    femaleFilter: sexFilter==2 || sexFilter==3,
    category: category
  };
  res.render('chart',data);
  //res.render('chart',data);
});
module.exports = router;
