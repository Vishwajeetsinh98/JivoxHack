var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public" ));

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

  var data = {
    isGovt: true,
    campaignName: campaignName,
    ageLower: ageLower,
    ageHigher: ageHigher,
    incomeLower: incomeLower,
    incomeHigher: incomeHigher,
    maleFilter: maleFilter,
    femaleFilter: femaleFilter,
    bangalore: bangalore,
    chennai: chennai,
    delhi: delhi,
    mumbai: mumbai
  };
  res.json(data);
});
module.exports = router;
