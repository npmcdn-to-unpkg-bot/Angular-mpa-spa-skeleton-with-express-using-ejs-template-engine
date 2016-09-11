var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angular' });
});

// Express Routing //
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Angular' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Angular' });
});

/* for spa
 router.get('*', function(req, res, next) {
 res.render('index', { title: 'Angular' });
 });
 */

// Angular Ui-router Views Rendering //

router.get('/ui_home', function (req,res) {
  res.render('partials/home',{message: 'Hello This is Home' });
});

router.get('/ui_about', function (req,res) {
  res.render('partials/about',{message: 'Hello This is About' });
});


module.exports = router;
