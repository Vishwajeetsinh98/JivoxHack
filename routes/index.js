var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Jivox' });
});
router.get('/addNew', function(req,res){
  var isGovt = req.query.govt;
  res.render('form',{govt: isGovt});
});
module.exports = router;
