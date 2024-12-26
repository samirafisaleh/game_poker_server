var express = require('express');
var router = express.Router();

const ENUMERATION = {
  HEART : 'heart'
}


/* CREATE SESSION */
router.post('/', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    result : "OK"
  }));
});




/* LIST SESSION */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  res.json(data);
});



/* INFO SESSION */
router.get('/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    username : "sam",
    first_name : "sam",
    last_name : "rafi",
    id : 1
  }))
  
});


/* UPDATE ACTION */
router.put('/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    result : "OK"
  }));
});


/* DELETE SESSION */
router.delete('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    result : "OK"
  }));
});

module.exports = router;