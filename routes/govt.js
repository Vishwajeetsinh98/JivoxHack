var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public" ));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Govt');
});

router.post('/addProduct', function(req,res){
  var campaignName = req.body.name;
  var ageLower = req.body.agelower;
  var ageHigher = req.body.agehigher;
  var incomeLower = req.body.incomelower;
  var incomeHigher = req.body.incomehigher;
  var location1 = req.body.location1;
  var location2 = req.body.location2;
  var location3 = req.body.location3;
  var location4 = req.body.location4;
  var maleFilter = req.body.male;
  var femaleFilter = req.body.female;
  var data = {
    isGovt: true,
    campaignName: campaignName,
    ageLower: ageLower,
    ageHigher: ageHigher,
    incomeLower: incomeLower,
    incomeHigher: incomeHigher,
    location1: location1,
    location2: location2,
    location3: location3,
    location4: location4,
    maleFilter: maleFilter,
    femaleFilter: femaleFilter
  };
  res.json(data);
});
module.exports = router;
