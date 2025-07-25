var express = require('express');
var router = express.Router();
var items = require('../model/items-model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getItems',(req,res)=>{
    items.find().skip(req.query.skip).limit(req.query.limit)
        .then((obj)=>{
          res.send({obj});
        })
        .catch((err)=>{
          res.send(err);
        });
})

module.exports = router;
