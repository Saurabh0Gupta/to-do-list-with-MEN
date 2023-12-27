var express = require('express');
var router = express.Router();

const userModel=require('./users')

/* GET home page. */
router.get('/',  async function(req, res, next) {
  const tasks=await userModel.find();
res.render('index',{tasks});
});
router.post('/create',  async function(req, res, next) {
  const tasks=await userModel.create({
    task:req.body.task,
  });
res.redirect('/');
});
router.get('/delete/:id',  async function(req, res, next) {
  const tasks=await userModel.findOneAndDelete({_id:req.params.id});
res.redirect('/');
});
router.get('/update/:id',  async function(req, res, next) {
  const tasks=await userModel.findOne({_id:req.params.id});
res.render('update',{tasks});
// console.log()
// res.send(tasks)
});

router.post('/update/:id',async function(req,res){
  const tasks=await userModel.findOneAndUpdate({_id:req.params.id},{task:req.body.task , datecreated:Date.now()})
  res.redirect("/")
})

module.exports = router;
