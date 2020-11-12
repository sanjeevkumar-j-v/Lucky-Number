var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {
    title: "Lucky Level Number",
  });
});

router.post("/find-my-lucky-number", function (req, res) {
  var mailid = req.body.mailid;
  var ans = 0;
  var a = mailid.replace("@gmail.com", "");
  var b = a.match(/[aeiou]/gi).length;
  var c = b * (a.length - b);
  while(c > 9) {
    c = Math.round(c/10) + c % 10;
  }
  res.render("result", {
    ans: c,
    title: "result"
  });
});

// router.post("/create-task", function (req, res) {
//   Task.create(
//     {
//       description: req.body.description,
//       category: req.body.category,
//       dueDate: req.body.dueDate,
//     },
//     function (err, newTask) {
//       if (err) {
//         console.log("Error in creating a task!");
//         return;
//       }
//       // console.log("******", req.body);
//       return res.redirect("back");
//     }
//   );
// });

module.exports = router;
